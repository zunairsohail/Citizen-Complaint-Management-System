"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  CheckCircle,
  User,
  Eye,
  PlusCircle,
  Clock,
  HandCoins,
} from "lucide-react";

export default function UserDashboard() {
  const userName = "Zunair"; // Replace with dynamic user data
  const [activeTab, setActiveTab] = useState("complaints"); // Sidebar tab state

  // Sidebar items
  const sidebarItems = [
    { id: "complaints", title: "My Complaints", icon: <MessageSquare size={18} /> },
    { id: "volunteer", title: "Volunteer Opportunities", icon: <User size={18} /> },
    { id: "status", title: "Status Info", icon: <CheckCircle size={18} /> },
    { id: "history", title: "History", icon: <Clock size={18} /> },
    { id: "rewards", title: "Rewards", icon: <HandCoins size={18} /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                activeTab === item.id ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              {item.icon}
              {item.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "complaints" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare size={20} /> My Complaints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>No complaints submitted yet.</p>
              <Button className="mt-4" variant="outline">
                <PlusCircle className="mr-2" /> Submit Complaint
              </Button>
            </CardContent>
          </Card>
        )}

        {activeTab === "volunteer" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User size={20} /> Volunteer Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>No volunteer activities joined yet.</p>
              <Button className="mt-4" variant="outline">
                <Eye className="mr-2" /> Browse Opportunities
              </Button>
            </CardContent>
          </Card>
        )}

        {activeTab === "status" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle size={20} /> Status Info
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Welcome, {userName}!</p>
              <p>Track your complaints and volunteer activities here.</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "history" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock size={20} /> History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your past complaints and volunteer activities will appear here.</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "rewards" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HandCoins size={20} /> Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Earn rewards for participating in volunteering and submitting complaints.</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
