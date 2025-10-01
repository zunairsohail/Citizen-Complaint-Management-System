// pages/admin-dashboard.js
export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-gray-600">Total Complaints</h2>
          <p className="text-2xl font-bold text-blue-600">34</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-gray-600">Open</h2>
          <p className="text-2xl font-bold text-red-600">10</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-gray-600">In Progress</h2>
          <p className="text-2xl font-bold text-yellow-500">8</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-gray-600">Resolved</h2>
          <p className="text-2xl font-bold text-green-600">16</p>
        </div>
      </div>

      {/* Complaints Table */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">All Complaints</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Citizen</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">201</td>
              <td className="p-3 border">Ali Khan</td>
              <td className="p-3 border">Broken water pipe</td>
              <td className="p-3 border text-yellow-600">In Progress</td>
              <td className="p-3 border">2025-09-28</td>
              <td className="p-3 border space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">View</button>
                <button className="px-3 py-1 bg-green-500 text-white rounded">Resolve</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="p-3 border">202</td>
              <td className="p-3 border">Sara Ahmed</td>
              <td className="p-3 border">Street flooding</td>
              <td className="p-3 border text-red-600">Open</td>
              <td className="p-3 border">2025-09-29</td>
              <td className="p-3 border space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">View</button>
                <button className="px-3 py-1 bg-green-500 text-white rounded">Resolve</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
