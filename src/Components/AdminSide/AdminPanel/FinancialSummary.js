import axios from "axios";
import React, { useState, useEffect } from "react";

export default function FinancialSummary() {
  const [summary, setSummary] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const instructorId = localStorage.getItem("instructor_id");

      if (!instructorId) {
        console.error("Instructor not found in Local Storage");
      }

      const data = { instructor_id: instructorId };
      axios
        .post(
          "https://drivinginstructorsdiary.com/app/api/viewFinancialSummaryApi",
          data
        )
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();
  }, []);

  return <div></div>;
}
