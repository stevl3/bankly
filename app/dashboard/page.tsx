import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Building2,
  ArrowDownRight,
} from "lucide-react";
import { GradientButton } from "@/components/ui/button-gradient";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex h-16 items-center px-6">
          <SidebarTrigger className="text-slate-300 hover:text-white" />
          <div className="ml-4">
            <h1 className="text-2xl font-semibold text-white">
              Hello, Steven 👋
            </h1>
            <p className="text-slate-400">
              Welcome back to your financial dashboard
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Total Balance</p>
                  <h3 className="text-2xl font-bold text-white">$12,847.32</h3>
                  <p className="text-sm text-green-400">
                    +2.5% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-slate-900" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Monthly Spending</p>
                  <h3 className="text-2xl font-bold text-white">$3,247.89</h3>
                  <p className="text-sm text-red-400">-1.2% from last month</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-slate-900" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Connected Banks</p>
                  <h3 className="text-2xl font-bold text-white">4</h3>
                  <p className="text-sm text-slate-400">
                    Across 3 institutions
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-slate-900" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Credit Utilization</p>
                  <h3 className="text-2xl font-bold text-white">23%</h3>
                  <p className="text-sm text-green-400">Good standing</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-slate-900" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Spending Overview */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Spending Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Food & Dining</span>
                      <span className="text-white">$450/$600</span>
                    </div>
                    <Progress value={75} className="h-2 bg-slate-700" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Entertainment</span>
                      <span className="text-white">$120/$200</span>
                    </div>
                    <Progress value={60} className="h-2 bg-slate-700" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Shopping</span>
                      <span className="text-white">$300/$400</span>
                    </div>
                    <Progress value={75} className="h-2 bg-slate-700" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">
                  Recent Transactions
                </CardTitle>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                        <ArrowDownRight className="h-5 w-5 text-slate-900" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Salary Deposit</p>
                        <p className="text-slate-400 text-sm">
                          Income • Yesterday
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-semibold">+$3,200.00</p>
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-400"
                      >
                        Income
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                        <span className="text-slate-900 text-sm font-semibold">
                          N
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Netflix</p>
                        <p className="text-slate-400 text-sm">
                          Subscription • 2 days ago
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">-$15.99</p>
                      <Badge
                        variant="secondary"
                        className="bg-[hsl(47.9,95.8%,53.1%)]/20 text-[hsl(47.9,95.8%,53.1%)]"
                      >
                        Entertainment
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* User Info */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-full flex items-center justify-center">
                    <span className="text-slate-900 font-semibold">ST</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Steven Thompson
                    </h3>
                    <p className="text-slate-400 text-sm">Premium Member</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Sign Out
                </Button>
              </CardContent>
            </Card>

            {/* Quick Balance */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Balance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Checking</span>
                  <span className="text-white font-medium">$8,247.32</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Savings</span>
                  <span className="text-white font-medium">$4,600.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Credit Cards</span>
                  <span className="text-red-400 font-medium">-$2,140.34</span>
                </div>
                <Separator className="bg-slate-700" />
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Net Worth</span>
                  <span className="text-green-400 font-medium">$10,706.98</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <GradientButton className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Account
                </GradientButton>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
