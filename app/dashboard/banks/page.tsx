import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Plus,
  Building2,
  CreditCard,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { GradientButton } from "@/components/ui/button-gradient";

export default function BanksPage() {
  const accounts = [
    {
      id: 1,
      bank: "Chase Bank",
      accountName: "Chase Total Checking",
      accountNumber: "****1234",
      type: "Checking",
      balance: 8247.32,
      logo: "🏦",
      status: "Active",
    },
    {
      id: 2,
      bank: "Bank of America",
      accountName: "Advantage Savings",
      accountNumber: "****5678",
      type: "Savings",
      balance: 4600.0,
      logo: "🏛️",
      status: "Active",
    },
    {
      id: 3,
      bank: "Capital One",
      accountName: "Venture Rewards",
      accountNumber: "****9012",
      type: "Credit Card",
      balance: -1247.89,
      creditLimit: 5000,
      logo: "💳",
      status: "Active",
    },
    {
      id: 4,
      bank: "American Express",
      accountName: "Gold Card",
      accountNumber: "****3456",
      type: "Credit Card",
      balance: -892.45,
      creditLimit: 10000,
      logo: "💎",
      status: "Active",
    },
  ];

  const totalCash = accounts
    .filter((acc) => acc.type === "Checking" || acc.type === "Savings")
    .reduce((sum, acc) => sum + acc.balance, 0);

  const totalCredit = accounts
    .filter((acc) => acc.type === "Credit Card")
    .reduce((sum, acc) => sum + Math.abs(acc.balance), 0);

  const netBalance = totalCash - totalCredit;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex h-16 items-center px-6">
          <SidebarTrigger className="text-slate-300 hover:text-white" />
          <div className="ml-4 flex-1">
            <h1 className="text-2xl font-semibold text-white">My Banks</h1>
            <p className="text-slate-400">Manage all your connected accounts</p>
          </div>
          <GradientButton>Connect New Bank</GradientButton>
        </div>
      </header>

      <div className="p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Total Cash
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                ${totalCash.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">Checking & Savings</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Credit Used
              </CardTitle>
              <CreditCard className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                ${totalCredit.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">Across all credit cards</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Net Balance
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                ${netBalance.toLocaleString()}
              </div>
              <p className="text-xs text-green-400">Total assets minus debt</p>
            </CardContent>
          </Card>
        </div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <Card
              key={account.id}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-2xl">
                      {account.logo}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {account.bank}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {account.accountName}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      account.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }
                  >
                    {account.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-400 text-sm">Account Number</p>
                    <p className="text-white font-mono">
                      {account.accountNumber}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Account Type</p>
                    <div className="flex items-center space-x-2">
                      {account.type === "Credit Card" ? (
                        <CreditCard className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Building2 className="h-4 w-4 text-slate-400" />
                      )}
                      <span className="text-white">{account.type}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      {account.type === "Credit Card"
                        ? "Current Balance"
                        : "Available Balance"}
                    </p>
                    <p
                      className={`text-2xl font-bold ${
                        account.balance < 0 ? "text-red-400" : "text-white"
                      }`}
                    >
                      ${Math.abs(account.balance).toLocaleString()}
                    </p>
                    {account.creditLimit && (
                      <p className="text-slate-400 text-sm">
                        Limit: ${account.creditLimit.toLocaleString()} •{" "}
                        {Math.round(
                          (Math.abs(account.balance) / account.creditLimit) *
                            100
                        )}
                        % used
                      </p>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add New Bank Card */}
          <Card className="bg-slate-800/50 border-slate-700 border-dashed hover:bg-slate-800/70 transition-colors cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="w-16 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Connect New Bank
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Add another bank account or credit card to track all your
                finances in one place.
              </p>
              <GradientButton>Connect New Bank</GradientButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
