import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User, Bell, Shield, Github, Trash2, Camera } from "lucide-react";
import { GradientButton } from "@/components/ui/button-gradient";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex h-16 items-center px-6">
          <SidebarTrigger className="text-slate-300 hover:text-white" />
          <div className="ml-4">
            <h1 className="text-2xl font-semibold text-white">Settings</h1>
            <p className="text-slate-400">
              Manage your account and preferences
            </p>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="h-5 w-5 mr-2" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="bg-gradient-to-r from-[hsl(47.9,95.8%,53.1%)] to-[hsl(36,100%,50%)] text-slate-900 text-xl">
                    DM
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button
                    variant="outline"
                    className="border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary-foreground"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Change Photo
                  </Button>
                  <p className="text-slate-400 text-sm mt-2">
                    JPG, PNG or GIF. Max size 2MB.
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-300">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    defaultValue="Demo"
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-300">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    defaultValue="User"
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="demo.user@example.com"
                  className="bg-slate-700/50 border-slate-600 text-white"
                />
              </div>

              <GradientButton>Save Changes</GradientButton>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">
                      Email Notifications
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Receive email updates about your account
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">SMS Alerts</h4>
                    <p className="text-slate-400 text-sm">
                      Get text messages for important updates
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">
                      Transaction Alerts
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Notify me of all transactions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">
                      Budget Notifications
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Alert when approaching budget limits
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Marketing Emails</h4>
                    <p className="text-slate-400 text-sm">
                      Receive product updates and tips
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security & Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Connected Accounts */}
              <div>
                <h4 className="text-white font-medium mb-4">
                  Connected Accounts
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <Github className="h-5 w-5 text-white" />
                      <div>
                        <p className="text-white font-medium">GitHub</p>
                        <p className="text-slate-400 text-sm">
                          Connected as demo-user
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-400"
                    >
                      Connected
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
                    <div className="flex items-center space-x-3">
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <div>
                        <p className="text-white font-medium">Google</p>
                        <p className="text-slate-400 text-sm">
                          Connected as demo.user@example.com
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-500/20 text-green-400"
                    >
                      Connected
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-600" />

              {/* Change Password */}
              <div>
                <h4 className="text-white font-medium mb-4">Change Password</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-slate-300">
                      Current Password
                    </Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-slate-300">
                      New Password
                    </Label>
                    <Input
                      id="newPassword"
                      type="password"
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-slate-300">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <GradientButton>Update Password</GradientButton>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-slate-800/50 border-red-500/50">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center">
                <Trash2 className="h-5 w-5 mr-2" />
                Danger Zone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium">Delete Account</h4>
                  <p className="text-slate-400 text-sm mb-4">
                    Once you delete your account, there is no going back. Please
                    be certain.
                  </p>
                  <Button
                    variant="destructive"
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
