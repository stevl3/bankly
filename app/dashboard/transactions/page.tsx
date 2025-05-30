import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Filter, Download, ArrowUpDown } from "lucide-react";

export default function TransactionsPage() {
  const transactions = [
    {
      id: 1,
      description: "Domino's Pizza",
      amount: -24.99,
      account: "Chase Checking",
      category: "Food & Dining",
      status: "Completed",
      date: "2024-01-15",
      icon: "🍕",
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: 3200.0,
      account: "Chase Checking",
      category: "Income",
      status: "Completed",
      date: "2024-01-14",
      icon: "💰",
    },
    {
      id: 3,
      description: "Netflix Subscription",
      amount: -15.99,
      account: "Capital One Credit",
      category: "Entertainment",
      status: "Completed",
      date: "2024-01-13",
      icon: "🎬",
    },
    {
      id: 4,
      description: "Uber Ride",
      amount: -18.45,
      account: "Chase Checking",
      category: "Transportation",
      status: "Completed",
      date: "2024-01-13",
      icon: "🚗",
    },
    {
      id: 5,
      description: "Amazon Purchase",
      amount: -89.99,
      account: "Amex Gold",
      category: "Shopping",
      status: "Pending",
      date: "2024-01-12",
      icon: "📦",
    },
    {
      id: 6,
      description: "Starbucks",
      amount: -6.75,
      account: "Chase Checking",
      category: "Food & Dining",
      status: "Completed",
      date: "2024-01-12",
      icon: "☕",
    },
    {
      id: 7,
      description: "Gym Membership",
      amount: -49.99,
      account: "BofA Checking",
      category: "Health & Fitness",
      status: "Completed",
      date: "2024-01-11",
      icon: "💪",
    },
    {
      id: 8,
      description: "Gas Station",
      amount: -45.2,
      account: "Capital One Credit",
      category: "Transportation",
      status: "Completed",
      date: "2024-01-10",
      icon: "⛽",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Food & Dining": "bg-red-500/20 text-red-400",
      Income: "bg-green-500/20 text-green-400",
      Entertainment:
        "bg-[hsl(47.9,95.8%,53.1%)]/20 text-[hsl(47.9,95.8%,53.1%)]",
      Transportation: "bg-blue-500/20 text-blue-400",
      Shopping: "bg-orange-500/20 text-orange-400",
      "Health & Fitness": "bg-pink-500/20 text-pink-400",
    };
    return colors[category] || "bg-slate-500/20 text-slate-400";
  };

  const getStatusColor = (status: string) => {
    return status === "Completed"
      ? "bg-green-500/20 text-green-400"
      : "bg-yellow-500/20 text-yellow-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex h-16 items-center px-6">
          <SidebarTrigger className="text-slate-300 hover:text-white" />
          <div className="ml-4 flex-1">
            <h1 className="text-2xl font-semibold text-white">
              Transaction History
            </h1>
            <p className="text-slate-400">
              View and manage all your transactions
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Filters */}
        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>

              <Select>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="All Accounts" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Accounts</SelectItem>
                  <SelectItem value="chase">Chase Checking</SelectItem>
                  <SelectItem value="bofa">BofA Savings</SelectItem>
                  <SelectItem value="capital">Capital One Credit</SelectItem>
                  <SelectItem value="amex">Amex Gold</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="food">Food & Dining</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="shopping">Shopping</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Last 30 days" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">All Transactions</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Sort
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-300 font-medium">
                      Description
                    </th>
                    <th className="text-left py-3 px-4 text-slate-300 font-medium">
                      Amount
                    </th>
                    <th className="text-left py-3 px-4 text-slate-300 font-medium">
                      Account
                    </th>
                    <th className="text-left py-3 px-4 text-slate-300 font-medium">
                      Category
                    </th>
                    <th className="text-left py-3 px-4 text-slate-300 font-medium">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-slate-300 font-medium">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-lg">
                            {transaction.icon}
                          </div>
                          <span className="text-white font-medium">
                            {transaction.description}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`font-semibold ${
                            transaction.amount < 0
                              ? "text-red-400"
                              : "text-green-400"
                          }`}
                        >
                          {transaction.amount < 0 ? "-" : "+"}$
                          {Math.abs(transaction.amount).toFixed(2)}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-slate-300">
                          {transaction.account}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant="secondary"
                          className={getCategoryColor(transaction.category)}
                        >
                          {transaction.category}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant="secondary"
                          className={getStatusColor(transaction.status)}
                        >
                          {transaction.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-slate-300">
                          {new Date(transaction.date).toLocaleDateString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-slate-400 text-sm">
                Showing 1-8 of 247 transactions
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
