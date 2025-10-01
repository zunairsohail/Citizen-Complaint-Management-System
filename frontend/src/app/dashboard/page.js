// pages/dashboard.js
export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-gray-600">Total Complaints</h2>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-gray-600">In Progress</h2>
          <p className="text-2xl font-bold text-yellow-500">4</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-gray-600">Resolved</h2>
          <p className="text-2xl font-bold text-green-600">6</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-gray-600">Pending</h2>
          <p className="text-2xl font-bold text-red-600">2</p>
        </div>
      </div>

      {/* Recent Complaints */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Complaints</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">101</td>
              <td className="p-3 border">Streetlight not working</td>
              <td className="p-3 border text-yellow-600">In Progress</td>
              <td className="p-3 border">2025-09-25</td>
              <td className="p-3 border">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">View</button>
              </td>
            </tr>
            <tr>
              <td className="p-3 border">102</td>
              <td className="p-3 border">Garbage collection delay</td>
              <td className="p-3 border text-green-600">Resolved</td>
              <td className="p-3 border">2025-09-20</td>
              <td className="p-3 border">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
