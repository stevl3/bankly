import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowRight, Send, Clock, CheckCircle } from "lucide-react";
import { GradientButton } from "@/components/ui/button-gradient";
import { Badge } from "@/components/ui/badge";
import { CreditCard, User } from "lucide-react";

export default function TransferPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex h-16 items-center px-6">
          <SidebarTrigger className="text-slate-300 hover:text-white" />
          <div className="ml-4">
            <h1 className="text-2xl font-semibold text-white">
              Payment Transfer
            </h1>
            <p className="text-slate-400">
              Transfer money between accounts or pay bills
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transfer Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">New Transfer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* From Account */}
                <div className="space-y-2">
                  <Label className="text-slate-300">From Account</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                      <SelectValue placeholder="Select source account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="checking">
                        Checking Account (****1234)
                      </SelectItem>
                      <SelectItem value="savings">
                        Savings Account (****5678)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* To Account */}
                <div className="space-y-2">
                  <Label className="text-slate-300">To Account</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="external">External Account</SelectItem>
                      <SelectItem value="credit">Credit Card</SelectItem>
                      <SelectItem value="savings">Savings Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <Label className="text-slate-300">Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-400">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="pl-7 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label className="text-slate-300">
                    Description (Optional)
                  </Label>
                  <Textarea
                    placeholder="What's this transfer for?"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                {/* Transfer Speed */}
                <div className="space-y-2">
                  <Label className="text-slate-300">Transfer Speed</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-slate-700/30 border-slate-600 cursor-pointer hover:bg-slate-700/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-[hsl(47.9,95.8%,53.1%)]" />
                          <div>
                            <div className="text-white font-medium">
                              Standard (1-3 days)
                            </div>
                            <div className="text-slate-400 text-sm">Free</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-700/30 border-slate-600 cursor-pointer hover:bg-slate-700/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Send className="h-5 w-5 text-[hsl(47.9,95.8%,53.1%)]" />
                          <div>
                            <div className="text-white font-medium">
                              Instant
                            </div>
                            <div className="text-slate-400 text-sm">
                              $1.99 fee
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Submit Button */}
                <GradientButton className="w-full">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Review Transfer
                </GradientButton>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transfers & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary-foreground"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay Credit Card
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary-foreground"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Transfer to Savings
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary-foreground"
                >
                  <Send className="mr-2 h-4 w-4" />
                  External Transfer
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary-foreground"
                >
                  <User className="mr-2 h-4 w-4" />
                  Send to Friend
                </Button>
              </CardContent>
            </Card>

            {/* Recent Transfers */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-white font-medium">To BofA Savings</p>
                      <p className="text-slate-400 text-sm">Jan 14, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">$500.00</p>
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-400"
                    >
                      Completed
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        Credit Card Payment
                      </p>
                      <p className="text-slate-400 text-sm">Jan 13, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">$200.00</p>
                    <Badge
                      variant="secondary"
                      className="bg-[hsl(47.9,95.8%,53.1%)]/20 text-[hsl(47.9,95.8%,53.1%)]"
                    >
                      Processing
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        To External Account
                      </p>
                      <p className="text-slate-400 text-sm">Jan 12, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">$1,000.00</p>
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-400"
                    >
                      Completed
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
