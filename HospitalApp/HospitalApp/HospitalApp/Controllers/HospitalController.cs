using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HospitalApp.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using iMedOneDB;
using iMedOneDB.Models;

namespace HospitalApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Hospital")]
    [EnableCors("MyPolicy")]
    public class HospitalController : Controller
    {


        [HttpGet]
        [Route("GetAllStates")]
        public List<Tblstate> GetAllStates()
        {
            List<Tblstate> states = new List<Tblstate>();
            states = DBContext.GetData<iMedOneDB.Models.Tblstate>().ToList();
            return states;
        }

        [HttpGet]
        [Route("GetCities")]
        public List<Tblcity> GetCities(int state)
        {
            List<Tblcity> city = new List<Tblcity>();
            city = DBContext.GetData<iMedOneDB.Models.Tblcity>(state).ToList();
            return city;
        }

        [HttpGet]
        [Route("GetAllPatients")]
        public IEnumerable<TBLPATIENT> GetAllPatients()
        {
            return DBContext.GetData<TBLPATIENT>();
        }



        [HttpPost]
        [Route("RegisterPatient")]
        public int RegisterPatient([FromBody]Patient patient)
        {
            int status = 0;

            List<TBLPATIENT> listPatient = new List<TBLPATIENT>();

            listPatient.Add(new TBLPATIENT { Name=patient.Name,DOB=patient.DOB,CityId=Convert.ToInt16(patient.City),Gender=patient.Gender,SurName=patient.Surname});
            bool result = DBContext.SaveAll<iMedOneDB.Models.TBLPATIENT>(listPatient);
            if (result)
            {
                status = 1;
            }
            else
            {
                status = 0;
            }
            return status;
        }



    }
}