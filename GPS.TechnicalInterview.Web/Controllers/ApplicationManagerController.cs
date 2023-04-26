using GPS.TechnicalInterview.Web;
using GPS.TechnicalInterview.Web.ClientApp.data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using IO = System.IO;

namespace GPS.ApplicationManager.Web.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ApplicationManagerController : ControllerBase
  {
    private readonly ILogger<ApplicationManagerController> _logger;
public class StatusConverter : JsonConverter<status>
{
    public override status Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if (reader.TokenType != JsonTokenType.String)
        {
            throw new JsonException($"Unexpected token type: {reader.TokenType}");
        }

        string statusString = reader.GetString();
        if (!Enum.TryParse(statusString, out status statusValue))
        {
            throw new JsonException($"Invalid status value: {statusString}");
        }

        return statusValue;
    }

    public override void Write(Utf8JsonWriter writer, status value, JsonSerializerOptions options)
    {
        writer.WriteStringValue(value.ToString());
    }
}
    public ApplicationManagerController(ILogger<ApplicationManagerController> logger)
    {
      _logger = logger;
    }

[HttpGet("readJson")]
    public IActionResult ReadJson()
    {
        try
        {
            var options = new JsonSerializerOptions();
            options.Converters.Add(new StatusConverter());
            var jsonString = System.IO.File.ReadAllText("DB.json");
            var data = JsonSerializer.Deserialize<List<TechnicalInterview.Web.LoanApplication>>(jsonString, options);
            Console.WriteLine(data);
            return Ok(data);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to read json file");
            Console.WriteLine("Error:");
            return BadRequest();
        }
    }
    // TODO: Add your CRUD (Create, Read, Update, Delete) methods here:

[HttpPost("saveForm")]
public IActionResult SaveForm([FromBody] LoanApplication loanApplicationData)
{
     try
    {
        Console.WriteLine("Form data saved successfully.");
                const string jsonFilePath = "DB.json";

        // Read the existing loan applications from the JSON file
        string jsonString = IO.File.ReadAllText(jsonFilePath);
        List<LoanApplication> loanApplications = JsonSerializer.Deserialize<List<LoanApplication>>(jsonString);

        // Find the loan application with the matching applicationNumber
        LoanApplication existingLoanApplication = loanApplications
            .Find(la => la.applicationNumber == loanApplicationData.applicationNumber);

        if (existingLoanApplication == null)
        {Console.WriteLine("yo1");
            // If no matching loan application found, add the new loan application to the list
            loanApplications.Add(loanApplicationData);

            // Save the updated list of loan applications to the JSON file
            jsonString = JsonSerializer.Serialize(loanApplications);
            IO.File.WriteAllText(jsonFilePath, jsonString);

            Console.WriteLine(JsonSerializer.Serialize(loanApplicationData));
            return Ok(new { message = "created." });
        }
        else
        {Console.WriteLine("yo2");
            // Update the existing loan application
            int index = loanApplications.IndexOf(existingLoanApplication);
            loanApplications[index] = loanApplicationData;

            // Save the updated list of loan applications to the JSON file
            jsonString = JsonSerializer.Serialize(loanApplications);
            IO.File.WriteAllText(jsonFilePath, jsonString);

            Console.WriteLine(JsonSerializer.Serialize(loanApplicationData));
            return Ok(new { message = "saved." });
        }
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Failed to save form data 111");
        Console.WriteLine("Error:");
        return BadRequest();
    }
}

[HttpPost("deleteForm")]
public IActionResult DeleteForm([FromBody] string applicationNumber)
{
    try
    {
        Console.WriteLine(applicationNumber);
        const string jsonFilePath = "DB.json";

        // Read the existing loan applications from the JSON file
        string jsonString = IO.File.ReadAllText(jsonFilePath);
        List<LoanApplication> loanApplications = JsonSerializer.Deserialize<List<LoanApplication>>(jsonString);

        // Find the loan application with the matching applicationNumber
        LoanApplication existingLoanApplication = loanApplications.Find(la =>
        {
            if (la.applicationNumber == applicationNumber)
            {
                return true;
            }
            else
            {
                return false;
            }
        });

        // If no matching loan application found, return a 404 Not Found response
        if (existingLoanApplication == null)
        {
            return NotFound();
        }

        // Remove the existing loan application from the list
        loanApplications.Remove(existingLoanApplication);

        // Save the updated list of loan applications to the JSON file
        jsonString = JsonSerializer.Serialize(loanApplications);
        IO.File.WriteAllText(jsonFilePath, jsonString);

        Console.WriteLine(JsonSerializer.Serialize(existingLoanApplication));
        return Ok(new { message = "created." });
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Failed to save form data.");
        Console.WriteLine("Error:");
        return BadRequest();
    }
}
  }
}
