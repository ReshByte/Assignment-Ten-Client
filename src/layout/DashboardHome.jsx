import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const DashboardHome = () => {
  const [artworks, setArtworks] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch artworks from backend
    axios
      .get("https://assignment-ten-server-ten-theta.vercel.app/arts")
      .then((res) => {
        setArtworks(res.data);
        // Prepare chart data (example: artworks per category)
        const categoryCount = {};
        res.data.forEach((art) => {
          categoryCount[art.category] = (categoryCount[art.category] || 0) + 1;
        });
        const chartArray = Object.keys(categoryCount).map((cat) => ({
          category: cat,
          count: categoryCount[cat],
        }));
        setChartData(chartArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-gray-600 font-medium">Total Artworks</h3>
          <p className="text-2xl font-bold text-purple-600">{artworks.length}</p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-gray-600 font-medium">Total Categories</h3>
          <p className="text-2xl font-bold text-purple-600">
            {new Set(artworks.map((art) => art.category)).size}
          </p>
        </div>
        <div className="bg-white shadow p-6 rounded-lg">
          <h3 className="text-gray-600 font-medium">Total Artists</h3>
          <p className="text-2xl font-bold text-purple-600">
            {new Set(artworks.map((art) => art.artist)).size}
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-gray-700 font-semibold mb-4">Artworks per Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#7c3aed" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Data Table */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-gray-700 font-semibold mb-2">Artworks Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Category</th>
                <th className="border-b p-2">Price</th>
                <th className="border-b p-2">Artist</th>
              </tr>
            </thead>
            <tbody>
              {artworks.map((art) => (
                <tr key={art._id} className="hover:bg-gray-50">
                  <td className="p-2">{art.title}</td>
                  <td className="p-2">{art.category}</td>
                  <td className="p-2">${art.price}</td>
                  <td className="p-2">{art.artist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
