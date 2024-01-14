import React from "react";
import avatar from "../assets/avatar.png";
import SearchBox from "./SearchBox";
import ClassData from "./classData";

export default function StudentsTable() {
  const uniqueStudentName = {};

  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="mb-16 flex flex-col items-center">
        <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
          <span className="text-[#00CC8C]">Students</span> of the Year
        </h2>
        <SearchBox />
      </div>
      <div className="max-w-[848px] mx-auto overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#FFFFFF0D]">
              <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                ID
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold text-left">
                Name
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
              <th className="p-5 text-sm md:text-xl font-semibold">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {ClassData.data.map((classItem) => (
              <React.Fragment key={classItem.name}>
                <tr className="bg-white/5">
                  <td className="p-5 text-sm md:text-xl" colSpan="4">
                    {classItem.name}
                  </td>
                </tr>
                {classItem.students
                  .filter((student) => {
                    if (!uniqueStudentName[student.Name]) {
                      uniqueStudentName[student.Name] = true;
                      return true;
                    }
                    return false;
                  })
                  .slice(0, 10)
                  .map((student) => (
                    <tr
                      className="border-b border-[#7ECEB529]"
                      key={student.id}
                    >
                      <td className="p-5 text-sm md:text-xl">{student.id}</td>
                      <td className="p-5 text-sm md:text-xl">
                        <div className="flex space-x-3 items-center">
                          <img
                            className="w-8 h-8"
                            src={avatar}
                            width="32"
                            height="32"
                            alt={student.Name}
                          />
                          <span className="whitespace-nowrap">
                            {student.Name}
                          </span>
                        </div>
                      </td>
                      <td className="p-5 text-sm md:text-xl text-center">
                        {student.Scores}
                      </td>
                      <td className="p-5 text-sm md:text-xl text-center">
                        {student.Percentage}
                      </td>
                    </tr>
                  ))}
                {/* Reset uniqueStudentName for the next class */}
                {Object.keys(uniqueStudentName).forEach(
                  (key) => delete uniqueStudentName[key]
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
