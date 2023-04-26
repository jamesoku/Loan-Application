using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace GPS.TechnicalInterview.Web
{
    public class LoanApplication
{
    public string applicationNumber { get; set; }
    public loanterms loanterms { get; set; }
    public personalInfo personalInfo { get; set; }
    public DateTime dateApplied { get; set; }
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public status status { get; set; }
}

public class loanterms
{
    public double amount { get; set; }
    public double monthlyPaymentAmount { get; set; }
    public uint term { get; set; }
}

public class personalInfo
{
    public name name { get; set; }
    public string PhoneNumber { get; set; }
    public string Email { get; set; }
}

public class name
{
    public string First { get; set; }
    public string last { get; set; }
}

public enum status
{
    New,
    Approved,
    Funded
}
public class DemoModel{
    public string FirstName { get; set; }
}
}