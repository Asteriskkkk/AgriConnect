import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState ,useEffect } from "react";

const SchemeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [schemesData,setSchemesData] = useState(null);
  

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/schemes/${id}`);
        if (response.data.length > 0) {
          setSchemesData(response.data[0]);
        } else {
          setSchemesData(null);
        }
      } catch (error) {
        console.error("Error fetching schemes:", error);
      }
    };
    if(id) fetchSchemes();
  }, [id]); 

  const scheme = schemesData;
  console.log(scheme)
  if (!scheme) {
    return <div className="text-center text-gray-500">Scheme not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">{scheme.title}</h1>
      <p className="text-gray-600">{scheme.state}</p>

      {/* Tags */}
      <div className="flex gap-2 mt-2">
        {scheme.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm text-green-700 border border-green-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Details</h2>
        <p className="text-gray-700">{scheme.details.description}</p>
        <p className="text-gray-700 mt-2">{scheme.details.extra_info}</p>
      </div>

      {/* Benefits Table */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Benefits</h2>
        <table className="w-full mt-2 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Sl. No.</th>
              <th className="border p-2">Class/Course</th>
              <th className="border p-2">Course Fee Assistance</th>
              <th className="border p-2">Exam Fee Assistance</th>
              <th className="border p-2">Registration Fee Assistance</th>
              <th className="border p-2">Admission Fee Assistance</th>
            </tr>
          </thead>
          <tbody>
            {scheme.benefits.map((benefit) => (
              <tr key={benefit.sl_no}>
                <td className="border p-2 text-center">{benefit.sl_no}</td>
                <td className="border p-2">{benefit.class_course}</td>
                <td className="border p-2">{benefit.course_fee_assistance}</td>
                <td className="border p-2">{benefit.exam_fee_assistance}</td>
                <td className="border p-2">{benefit.registration_fee_assistance}</td>
                <td className="border p-2">{benefit.admission_fee_assistance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Eligibility */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Eligibility</h2>
        <ul className="list-disc ml-5">
          {scheme.eligibility.map((point, index) => (
            <li key={index} className="text-gray-700">{point}</li>
          ))}
        </ul>
      </div>

      {/* Application Process */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Application Process</h2>
        <p className="text-gray-700 font-bold">{scheme.application_process.type}</p>
        <ul className="list-disc ml-5">
          {scheme.application_process.steps.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ul>
        <p className="text-gray-700 mt-2 font-bold">Notes:</p>
        <ul className="list-disc ml-5">
          {scheme.application_process.notes.map((note, index) => (
            <li key={index} className="text-gray-700">{note}</li>
          ))}
        </ul>
      </div>

      {/* Documents Required */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Documents Required</h2>
        <ul className="list-disc ml-5">
          {scheme.documents_required.map((doc, index) => (
            <li key={index} className="text-gray-700">{doc}</li>
          ))}
        </ul>
      </div>

      <button onClick={() => navigate(-1)} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        Back
      </button>
    </div>
  );
};

export default SchemeDetails;
