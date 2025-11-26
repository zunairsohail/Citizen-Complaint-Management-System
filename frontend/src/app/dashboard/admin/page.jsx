"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, MessageCircle, HandCoins, FileText } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Overview</h1>
        <Badge variant="secondary" className="text-sm px-3 py-1">
          Active Role: Admin
        </Badge>
      </div>

      {/* Quick Stats Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">1,245</div>
            <p className="text-xs text-gray-500">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Complaints</CardTitle>
            <MessageCircle className="h-5 w-5 text-rose-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">98</div>
            <p className="text-xs text-gray-500">Pending reviews: 12</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Donations</CardTitle>
            <HandCoins className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">₨ 56,400</div>
            <p className="text-xs text-gray-500">+8 new donors this week</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Reports Generated</CardTitle>
            <FileText className="h-5 w-5 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">24</div>
            <p className="text-xs text-gray-500">Updated weekly</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <p className="text-sm text-gray-700">
              New user registered: <span className="font-medium">Ali Raza</span>
            </p>
            <Badge>Just now</Badge>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <p className="text-sm text-gray-700">
              Complaint resolved by Admin <span className="font-medium">Sara</span>
            </p>
            <Badge variant="outline">2 hrs ago</Badge>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Donation received from <span className="font-medium">Hassan Khan</span>
            </p>
            <Badge variant="outline">5 hrs ago</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Actions Section */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => router.push("/dashboard/admin/report")}>
          View Reports
        </Button>
        <Button onClick={() => router.push("/dashboard/admin/complaint")}>
          Go to Complaints
        </Button>
      </div>
    </div>
  );
}
