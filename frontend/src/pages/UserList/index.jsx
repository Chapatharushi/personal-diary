import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-paths";
import { format } from "date-fns";

function DiaryList() {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tempDiary = await getData();
      setDiary(tempDiary);
      console.log(JSON.stringify(tempDiary));
      console.log(JSON.stringify(diary));
    };
    fetchData();
  }, []);

  const getData = async () => {
    try {
      const finalURL = "http://localhost:3333/api/v1/user/";
      const res = await axios.get(finalURL);
      return res.data.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const removeDiary = (_id) => {
    try {
      //console.log(_id);
      alert(_id);
      if (window.confirm("Are you sure?")) {
        fetch("http://localhost:3333/api/v1/user/" + _id, {
          method: "delete",
          headers: {
            Accept: "application/json",
            "content-Type": "application/json",
          },
        });
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Dairy Plan</h3>
      <br></br>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Date</th>
            <th>Work</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Reviews</th>
          </tr>
        </thead>
        <tbody>
          {diary.map((item) => (
            <tr key="{item._id}">
              <td>{format(new Date(item.dateofbirth), "yyyy-MM-dd")}</td>
              <td>{item.work}</td>
              <td>{item.starttime}</td>
              <td>{item.endtime}</td>
              <td>{item.reviews}</td>
              <td>
                <Link
                  to={`${RoutePaths.edit}${item._id}`}
                  style={{
                    color: "green",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Edit |{" "}
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  onClick={() => removeDiary(item._id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DiaryList;
