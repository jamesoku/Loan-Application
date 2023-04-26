using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace GPS.TechnicalInterview.Web.ClientApp.data
{
    public class Fullstackdbcontext : DbContext
    {
        public Fullstackdbcontext(DbContextOptions options) : base(options){

        }

        public DbSet<LoanApplication> LoanApplication {get; set;}
    }
}