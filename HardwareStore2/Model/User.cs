using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HardwareStore2.Model
{
    public class User
    {
        public int User_id { get; set; } = 0;
        public string User_names { get; set; } = "";
        public string User_surnames { get; set; } = "";
        public string User_nick { get; set; } = "";
        public string Passwd { get; set; } = "";
        public string UserEmail { get; set; } = "";
    }
}
