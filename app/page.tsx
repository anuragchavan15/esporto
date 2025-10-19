"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  Users,
  Trophy,
  Wallet,
  Play,
  Settings,
  Shield,
  Clock,
  IndianRupee,
  Target,
  Crown,
  Zap,
  Plus,
  Eye,
  UserPlus,
  Calendar,
  Video,
  MessageSquare,
  Ban,
  Upload,
  Copy,
  Share2,
  Star,
  Flame,
  Sword,
  AlertTriangle,
  CheckCircle,
  Gamepad2,
  TrendingUp,
  Award,
  Lock,
  Timer,
  DollarSign,
  CreditCard,
  Smartphone,
  Send,
  History,
  Filter,
  Search,
  Bell,
  Home,
  User,
  LogOut,
} from "lucide-react"

export default function PUBGTournamentApp() {
  const [currentScreen, setCurrentScreen] = useState("login")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState("user")
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [walletBalance, setWalletBalance] = useState(2450)
  const [showRoomDetails, setShowRoomDetails] = useState(false)

  // Enhanced Login Screen with OTP
  const LoginScreen = () => {
    const [loginStep, setLoginStep] = useState("phone") // phone, otp, register
    const [phoneNumber, setPhoneNumber] = useState("")
    const [otp, setOtp] = useState("")
    const [pubgId, setPubgId] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    return (
      <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-black to-green-500/5 animate-pulse" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl animate-bounce delay-1000" />

        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-12">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 animate-pulse">
              <Target className="w-12 h-12 text-black" />
            </div>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              PUBG ARENA
            </h1>
            <p className="text-gray-400 text-lg">Elite Mobile Esports Tournament</p>
            <div className="flex items-center justify-center mt-2 space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              <span className="text-green-400 text-sm font-medium">LIVE</span>
            </div>
          </div>

          <Card className="bg-gray-900/80 backdrop-blur-sm border-green-500/30 shadow-2xl shadow-green-500/20">
            <CardHeader>
              <CardTitle className="text-center text-green-400 text-xl">
                {loginStep === "phone" && "Enter Phone Number"}
                {loginStep === "otp" && "Verify OTP"}
                {loginStep === "register" && "Complete Registration"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {loginStep === "phone" && (
                <div className="space-y-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-green-400" />
                    <Input
                      placeholder="Enter your phone number"
                      className="pl-12 bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-green-500 focus:ring-green-500/20 h-12"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold h-12 shadow-lg shadow-green-500/30"
                    onClick={async () => {
                      setIsLoading(true)
                      // Simulate OTP sending
                      setTimeout(() => {
                        setLoginStep("otp")
                        setIsLoading(false)
                      }, 1000)
                    }}
                    disabled={isLoading}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isLoading ? "Sending..." : "Send OTP"}
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-700" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-gray-900 px-3 text-gray-400">Or continue with</span>
                    </div>
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-blue-400" />
                    <Input
                      placeholder="Enter your email"
                      className="pl-12 bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent h-12"
                    onClick={() => setLoginStep("register")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Continue with Email
                  </Button>
                </div>
              )}

              {loginStep === "otp" && (
                <div className="space-y-4">
                  <p className="text-center text-gray-400">Enter the 6-digit OTP sent to {phoneNumber}</p>
                  <Input
                    placeholder="Enter OTP"
                    className="text-center text-2xl tracking-widest bg-black/50 border-gray-700 text-white focus:border-green-500 h-12"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold h-12"
                    onClick={() => setLoginStep("register")}
                  >
                    Verify OTP
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-gray-400 hover:text-green-400"
                    onClick={() => setLoginStep("phone")}
                  >
                    Change Phone Number
                  </Button>
                </div>
              )}

              {loginStep === "register" && (
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-green-400" />
                    <Input
                      placeholder="Username (Required)"
                      className="pl-12 bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-green-500 h-12"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <Gamepad2 className="absolute left-3 top-3 w-5 h-5 text-green-400" />
                    <Input
                      placeholder="PUBG In-Game ID (Required)"
                      className="pl-12 bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-green-500 h-12"
                      value={pubgId}
                      onChange={(e) => setPubgId(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-blue-400" />
                    <Input
                      placeholder="Email Address (Required)"
                      className="pl-12 bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 h-12"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold h-12"
                    onClick={async () => {
                      setIsLoading(true)
                      try {
                        // Create user in database
                        const response = await fetch('/api/users', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            phoneNumber: phoneNumber || undefined,
                            email,
                            pubgId,
                            username,
                          }),
                        })
                        
                        if (response.ok) {
                          setIsLoggedIn(true)
                          setCurrentScreen("home")
                        } else {
                          const error = await response.json()
                          console.error('Registration error:', error)
                          alert(error.error || 'Registration failed')
                        }
                      } catch (error) {
                        console.error('Network error:', error)
                        alert('Network error. Please check your connection and try again.')
                      } finally {
                        setIsLoading(false)
                      }
                    }}
                    disabled={isLoading || !username || !pubgId || !email}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {isLoading ? "Creating Account..." : "Complete Registration"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Enhanced Home Screen with Match Details
  const HomeScreen = () => {
    const [matches] = useState([
      {
        id: 1,
        name: "Championship Battle",
        image: "/placeholder.svg?height=80&width=80&text=PUBG",
        startTime: "15:30",
        entryFee: 100,
        prizePool: 8000,
        playersJoined: 64,
        maxPlayers: 88,
        map: "Erangel",
        mode: "Squad",
        status: "upcoming",
        timeLeft: "12 min",
      },
      {
        id: 2,
        name: "Elite Squad Wars",
        image: "/placeholder.svg?height=80&width=80&text=ELITE",
        startTime: "16:00",
        entryFee: 100,
        prizePool: 8000,
        playersJoined: 48,
        maxPlayers: 88,
        map: "Sanhok",
        mode: "Squad",
        status: "upcoming",
        timeLeft: "42 min",
      },
      {
        id: 3,
        name: "Pro League Finals",
        image: "/placeholder.svg?height=80&width=80&text=PRO",
        startTime: "16:30",
        entryFee: 100,
        prizePool: 8000,
        playersJoined: 72,
        maxPlayers: 88,
        map: "Miramar",
        mode: "Squad",
        status: "upcoming",
        timeLeft: "1h 12m",
      },
    ])

    return (
      <div className="min-h-screen bg-black text-white">
        {/* Enhanced Header */}
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-green-500/20 p-4 z-50">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-green-400 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Battle Lobby
              </h1>
              <p className="text-sm text-gray-400">Ready for combat, soldier?</p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                <IndianRupee className="w-3 h-3 mr-1" />
                {walletBalance.toLocaleString()}
              </Badge>
              <Button size="sm" variant="ghost" onClick={() => setCurrentScreen("wallet")}>
                <Wallet className="w-5 h-5 text-green-400" />
              </Button>
              <Button size="sm" variant="ghost">
                <Bell className="w-5 h-5 text-gray-400" />
              </Button>
            </div>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="p-4 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/30">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <p className="text-lg font-bold text-white">12</p>
                  <p className="text-xs text-gray-400">Wins</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/30">
                <CardContent className="p-4 text-center">
                  <Target className="w-6 h-6 mx-auto mb-2 text-red-400" />
                  <p className="text-lg font-bold text-white">156</p>
                  <p className="text-xs text-gray-400">Kills</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/30">
                <CardContent className="p-4 text-center">
                  <Crown className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-lg font-bold text-white">#47</p>
                  <p className="text-xs text-gray-400">Rank</p>
                </CardContent>
              </Card>
            </div>

            {/* Live Matches Banner */}
            <Card className="bg-gradient-to-r from-red-500/20 to-red-600/10 border-red-500/30 animate-pulse">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                    <div>
                      <p className="font-semibold text-red-400">3 LIVE MATCHES</p>
                      <p className="text-sm text-gray-300">Watch now and learn from pros</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => setCurrentScreen("live")}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Matches */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-green-400">Upcoming Matches</h2>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{matches.length} Available</Badge>
              </div>

              {matches.map((match) => (
                <Card
                  key={match.id}
                  className="bg-gray-900/80 backdrop-blur-sm border-green-500/20 shadow-lg shadow-green-500/5 hover:shadow-green-500/20 transition-all duration-300 hover:border-green-500/40"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                          <img src="/bgmi.jpg" alt="BGMI" className="h-full w-full object-cover" />
                        </div>
                        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1">
                          <Timer className="w-3 h-3 mr-1" />
                          {match.timeLeft}
                        </Badge>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-green-400 text-lg">{match.name}</h3>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">{match.map}</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                          <div className="flex items-center text-gray-300">
                            <IndianRupee className="w-4 h-4 mr-1 text-yellow-400" />
                            Entry: ₹{match.entryFee}
                          </div>
                          <div className="flex items-center text-green-400">
                            <Trophy className="w-4 h-4 mr-1" />
                            Prize: ₹{match.prizePool.toLocaleString()}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Users className="w-4 h-4 mr-1" />
                            {match.playersJoined}/{match.maxPlayers} Players
                          </div>
                          <div className="flex items-center text-blue-400">
                            <Clock className="w-4 h-4 mr-1" />
                            {match.startTime}
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(match.playersJoined / match.maxPlayers) * 100}%` }}
                          />
                        </div>

                        <div className="flex space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold shadow-lg shadow-green-500/30">
                                <Sword className="w-4 h-4 mr-2" />
                                Join Battle
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-gray-900 border-green-500/30 text-white">
                              <DialogHeader>
                                <DialogTitle className="text-green-400">Join {match.name}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="text-center p-4 bg-gray-800 rounded-lg">
                                  <p className="text-lg font-bold text-green-400">Entry Fee: ₹{match.entryFee}</p>
                                  <p className="text-sm text-gray-400">Will be deducted from wallet</p>
                                </div>
                                <div className="flex space-x-2">
                                  <Button className="flex-1 bg-green-500 hover:bg-green-600 text-black">
                                    Join Solo
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="flex-1 border-green-500/50 text-green-400 bg-transparent"
                                    onClick={() => setCurrentScreen("squad")}
                                  >
                                    Join with Squad
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Button
                            size="sm"
                            variant="outline"
                            className="border-green-500/50 text-green-400 bg-transparent hover:bg-green-500/10"
                          >
                            <Users className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-green-500/50 text-green-400 bg-transparent hover:bg-green-500/10"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollArea>

        <BottomNavigation />
      </div>
    )
  }

  // Enhanced Squad Management
  const SquadScreen = () => {
    const [squadMembers, setSquadMembers] = useState([
      { id: 1, name: "You", pubgId: "PlayerPro123", level: 45, isLeader: true, status: "online" },
      { id: 2, name: "WarriorX", pubgId: "WarriorX99", level: 38, isLeader: false, status: "online" },
      { id: 3, name: "SniperKing", pubgId: "SniperKing", level: 42, isLeader: false, status: "away" },
      { id: 4, name: "", pubgId: "", level: 0, isLeader: false, status: "empty" },
    ])

    return (
      <div className="min-h-screen bg-black text-white">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-green-500/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-green-400 flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Squad Management
            </h1>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              {squadMembers.filter((m) => m.status !== "empty").length}/4 Members
            </Badge>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Squad Status Card */}
          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center justify-between">
                <span className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Alpha Squad
                </span>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  <Crown className="w-3 h-3 mr-1" />
                  Rank #12
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">28</p>
                  <p className="text-sm text-gray-400">Matches Won</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-400">342</p>
                  <p className="text-sm text-gray-400">Total Kills</p>
                </div>
              </div>

              {/* Squad Members */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {squadMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    {member.status === "empty" ? (
                      <div className="relative">
                        <div className="w-16 h-16 mx-auto mb-2 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center">
                          <Plus className="w-6 h-6 text-gray-600" />
                        </div>
                        <p className="text-sm text-gray-500">Empty Slot</p>
                        <Button size="sm" className="mt-2 bg-green-500 hover:bg-green-600 text-black text-xs">
                          Invite
                        </Button>
                      </div>
                    ) : (
                      <div className="relative">
                        <Avatar className="w-16 h-16 mx-auto mb-2 border-2 border-green-500/30">
                          <AvatarImage
                            src={`/placeholder-64x64.png?key=ulap3&height=64&width=64&text=${member.name[0]}`}
                          />
                          <AvatarFallback className="bg-gray-800 text-green-400">{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-black ${
                            member.status === "online" ? "bg-green-500" : "bg-yellow-500"
                          }`}
                        />
                        {member.isLeader && (
                          <Crown className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 text-yellow-400" />
                        )}
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-xs text-gray-400">Level {member.level}</p>
                        <p className="text-xs text-green-400">{member.pubgId}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex-1 bg-green-500 hover:bg-green-600 text-black">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Invite Friends
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-green-500/30 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-green-400">Invite Friends</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input placeholder="Enter PUBG ID or Username" className="bg-black border-gray-700 text-white" />
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">Recent Players:</p>
                        {["GamerPro", "EliteShooter", "BattleKing"].map((player) => (
                          <div key={player} className="flex items-center justify-between p-2 bg-gray-800 rounded">
                            <span>{player}</span>
                            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black">
                              Invite
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="border-green-500/50 text-green-400 bg-transparent">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gray-900 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-green-400">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                <Users className="w-4 h-4 mr-2" />
                Create New Squad
              </Button>
              <Button variant="outline" className="w-full border-yellow-500/50 text-yellow-400 bg-transparent">
                <Zap className="w-4 h-4 mr-2" />
                Random Matchmaking
              </Button>
              <Button variant="outline" className="w-full border-purple-500/50 text-purple-400 bg-transparent">
                <Search className="w-4 h-4 mr-2" />
                Find Squad
              </Button>
            </CardContent>
          </Card>

          {/* Squad Chat Preview */}
          <Card className="bg-gray-900 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center justify-between">
                Squad Chat
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">2 new</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-start space-x-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="bg-gray-800 text-green-400 text-xs">W</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-gray-300">
                      <span className="text-green-400">WarriorX:</span> Ready for the next match?
                    </p>
                    <p className="text-xs text-gray-500">2 min ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="bg-gray-800 text-green-400 text-xs">S</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm text-gray-300">
                      <span className="text-green-400">SniperKing:</span> Let's dominate! 🔥
                    </p>
                    <p className="text-xs text-gray-500">1 min ago</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full border-green-500/50 text-green-400 bg-transparent">
                <MessageSquare className="w-4 h-4 mr-2" />
                Open Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        <BottomNavigation />
      </div>
    )
  }

  // Enhanced Wallet with UPI/Card Integration
  const WalletScreen = () => {
    const [transactions] = useState([
      {
        id: 1,
        type: "win",
        amount: 3000,
        description: "Championship Battle - 1st Place",
        time: "2 hours ago",
        status: "completed",
      },
      {
        id: 2,
        type: "entry",
        amount: -100,
        description: "Elite Squad Wars - Entry Fee",
        time: "4 hours ago",
        status: "completed",
      },
      {
        id: 3,
        type: "deposit",
        amount: 500,
        description: "UPI Deposit - PhonePe",
        time: "1 day ago",
        status: "completed",
      },
      {
        id: 4,
        type: "withdrawal",
        amount: -1000,
        description: "Bank Transfer",
        time: "2 days ago",
        status: "processing",
      },
    ])

    return (
      <div className="min-h-screen bg-black text-white">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-green-500/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-green-400 flex items-center">
              <Wallet className="w-6 h-6 mr-2" />
              Wallet
            </h1>
            <Button size="sm" variant="ghost">
              <History className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Balance Card */}
          <Card className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-green-500/40 shadow-2xl shadow-green-500/20">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <div className="text-4xl font-bold text-green-400 mb-2">₹{walletBalance.toLocaleString()}</div>
                <p className="text-gray-400">Available Balance</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm">Instant Withdrawals</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold shadow-lg shadow-green-500/30">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Money
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-green-500/30 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-green-400">Add Money to Wallet</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        {[100, 500, 1000, 2000, 5000, 10000].map((amount) => (
                          <Button
                            key={amount}
                            variant="outline"
                            className="border-green-500/50 text-green-400 bg-transparent hover:bg-green-500/10"
                          >
                            ₹{amount}
                          </Button>
                        ))}
                      </div>
                      <Input
                        placeholder="Enter custom amount"
                        className="bg-black border-gray-700 text-white"
                        type="number"
                      />
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">Payment Methods:</p>
                        <div className="grid grid-cols-2 gap-2">
                          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            <Smartphone className="w-4 h-4 mr-2" />
                            UPI
                          </Button>
                          <Button variant="outline" className="border-gray-600 text-gray-300 bg-transparent">
                            <CreditCard className="w-4 h-4 mr-2" />
                            Card
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex-1 border-green-500/50 text-green-400 bg-transparent hover:bg-green-500/10"
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Withdraw
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-green-500/30 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-green-400">Withdraw Money</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-sm text-yellow-400">
                          <AlertTriangle className="w-4 h-4 inline mr-1" />
                          Minimum withdrawal: ₹100
                        </p>
                      </div>
                      <Input
                        placeholder="Enter withdrawal amount"
                        className="bg-black border-gray-700 text-white"
                        type="number"
                      />
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400">Bank Details:</p>
                        <Input placeholder="Account Number" className="bg-black border-gray-700 text-white" />
                        <Input placeholder="IFSC Code" className="bg-black border-gray-700 text-white" />
                      </div>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-black">Withdraw Money</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="bg-gray-900 border-green-500/20">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-400" />
                <p className="text-lg font-bold text-white">₹12,450</p>
                <p className="text-xs text-gray-400">Total Winnings</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-red-500/20">
              <CardContent className="p-4 text-center">
                <Target className="w-6 h-6 mx-auto mb-2 text-red-400" />
                <p className="text-lg font-bold text-white">₹2,100</p>
                <p className="text-xs text-gray-400">Total Spent</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-blue-500/20">
              <CardContent className="p-4 text-center">
                <Award className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                <p className="text-lg font-bold text-white">28</p>
                <p className="text-xs text-gray-400">Matches Won</p>
              </CardContent>
            </Card>
          </div>

          {/* Transaction History */}
          <Card className="bg-gray-900 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center justify-between">
                Transaction History
                <Button size="sm" variant="ghost">
                  <Filter className="w-4 h-4 text-gray-400" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.type === "win"
                            ? "bg-green-500/20 text-green-400"
                            : tx.type === "entry"
                              ? "bg-red-500/20 text-red-400"
                              : tx.type === "deposit"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {tx.type === "win" && <Trophy className="w-5 h-5" />}
                        {tx.type === "entry" && <Target className="w-5 h-5" />}
                        {tx.type === "deposit" && <Plus className="w-5 h-5" />}
                        {tx.type === "withdrawal" && <DollarSign className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{tx.description}</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs text-gray-400">{tx.time}</p>
                          <Badge
                            className={`text-xs ${
                              tx.status === "completed"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }`}
                          >
                            {tx.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${tx.amount > 0 ? "text-green-400" : "text-red-400"}`}>
                        {tx.amount > 0 ? "+" : ""}₹{Math.abs(tx.amount).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <BottomNavigation />
      </div>
    )
  }

  // Enhanced My Matches with Room Details
  const MyMatchesScreen = () => {
    const [activeTab, setActiveTab] = useState("upcoming")

    const upcomingMatches = [
      {
        id: 1,
        name: "Championship Battle",
        startTime: "15:30",
        timeLeft: "12 min",
        entryFee: 100,
        status: "joined",
        squadName: "Alpha Squad",
        roomId: "",
        password: "",
        showRoom: false,
      },
      {
        id: 2,
        name: "Elite Squad Wars",
        startTime: "16:00",
        timeLeft: "42 min",
        entryFee: 100,
        status: "joined",
        squadName: "Alpha Squad",
        roomId: "ROOM123456",
        password: "PASS789",
        showRoom: true,
      },
    ]

    const liveMatches = [
      {
        id: 3,
        name: "Pro League Finals",
        startTime: "14:30",
        status: "live",
        playersAlive: 23,
        squadRank: 8,
        kills: 3,
      },
    ]

    const completedMatches = [
      {
        id: 4,
        name: "Morning Battle",
        completedTime: "2 hours ago",
        rank: 1,
        kills: 12,
        winnings: 3000,
        status: "won",
      },
      {
        id: 5,
        name: "Squad Championship",
        completedTime: "1 day ago",
        rank: 5,
        kills: 8,
        winnings: 300,
        status: "completed",
      },
    ]

    return (
      <div className="min-h-screen bg-black text-white">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-green-500/20 p-4">
          <h1 className="text-xl font-bold text-green-400 flex items-center">
            <Gamepad2 className="w-6 h-6 mr-2" />
            My Matches
          </h1>
        </div>

        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900 border border-green-500/20">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="live" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Live
              </TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Completed
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4 mt-4">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="bg-gray-900 border-green-500/20 shadow-lg shadow-green-500/5">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-green-400 text-lg">{match.name}</h3>
                        <p className="text-sm text-gray-400">Squad: {match.squadName}</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        <Clock className="w-3 h-3 mr-1" />
                        {match.timeLeft}
                      </Badge>
                    </div>

                    {match.showRoom && (
                      <div className="mb-4 p-4 bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/30 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-green-400 flex items-center">
                            <Lock className="w-4 h-4 mr-2" />
                            Room Details
                          </h4>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Available Now</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-400">Room ID</p>
                            <div className="flex items-center space-x-2">
                              <p className="font-mono text-lg text-white">{match.roomId}</p>
                              <Button size="sm" variant="ghost">
                                <Copy className="w-4 h-4 text-green-400" />
                              </Button>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Password</p>
                            <div className="flex items-center space-x-2">
                              <p className="font-mono text-lg text-white">{match.password}</p>
                              <Button size="sm" variant="ghost">
                                <Copy className="w-4 h-4 text-green-400" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full mt-3 bg-green-500 hover:bg-green-600 text-black">
                          <Play className="w-4 h-4 mr-2" />
                          Join PUBG Room
                        </Button>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-300">Start: {match.startTime}</span>
                        <span className="text-yellow-400">Entry: ₹{match.entryFee}</span>
                      </div>
                      <Button size="sm" variant="outline" className="border-red-500/50 text-red-400 bg-transparent">
                        Leave Match
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="live" className="space-y-4 mt-4">
              {liveMatches.map((match) => (
                <Card
                  key={match.id}
                  className="bg-gray-900 border-red-500/30 shadow-lg shadow-red-500/20 animate-pulse"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-red-400 text-lg flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-ping" />
                          {match.name}
                        </h3>
                        <p className="text-sm text-gray-400">Started at {match.startTime}</p>
                      </div>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">LIVE</Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-white">{match.playersAlive}</p>
                        <p className="text-xs text-gray-400">Players Alive</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-yellow-400">#{match.squadRank}</p>
                        <p className="text-xs text-gray-400">Squad Rank</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-green-400">{match.kills}</p>
                        <p className="text-xs text-gray-400">Squad Kills</p>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => setCurrentScreen("live")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Watch Live
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4 mt-4">
              {completedMatches.map((match) => (
                <Card
                  key={match.id}
                  className={`bg-gray-900 border-blue-500/20 shadow-lg ${
                    match.status === "won" ? "shadow-green-500/20 border-green-500/30" : "shadow-blue-500/5"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-blue-400 text-lg flex items-center">
                          {match.status === "won" && <Crown className="w-5 h-5 mr-2 text-yellow-400" />}
                          {match.name}
                        </h3>
                        <p className="text-sm text-gray-400">{match.completedTime}</p>
                      </div>
                      <Badge
                        className={`${
                          match.status === "won"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        }`}
                      >
                        {match.status === "won" ? "WON" : `#${match.rank}`}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-lg font-bold text-yellow-400">#{match.rank}</p>
                        <p className="text-xs text-gray-400">Final Rank</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-red-400">{match.kills}</p>
                        <p className="text-xs text-gray-400">Total Kills</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-green-400">₹{match.winnings}</p>
                        <p className="text-xs text-gray-400">Winnings</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1 border-blue-500/50 text-blue-400 bg-transparent">
                        <Video className="w-4 h-4 mr-2" />
                        Watch Replay
                      </Button>
                      <Button variant="outline" className="flex-1 border-green-500/50 text-green-400 bg-transparent">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Result
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <BottomNavigation />
      </div>
    )
  }

  // Enhanced Leaderboard with Glow Effects
  const LeaderboardScreen = () => {
    const [activeTab, setActiveTab] = useState("kills")

    const killsLeaderboard = [
      {
        rank: 1,
        name: "ShadowKiller",
        squad: "Death Squad",
        kills: 245,
        matches: 45,
        avatar: "S",
        isCurrentUser: false,
      },
      {
        rank: 2,
        name: "ProSniper",
        squad: "Elite Force",
        kills: 238,
        matches: 52,
        avatar: "P",
        isCurrentUser: false,
      },
      {
        rank: 3,
        name: "BattleKing",
        squad: "Royal Guards",
        kills: 221,
        matches: 48,
        avatar: "B",
        isCurrentUser: false,
      },
      {
        rank: 4,
        name: "You",
        squad: "Alpha Squad",
        kills: 156,
        matches: 32,
        avatar: "Y",
        isCurrentUser: true,
      },
    ]

    return (
      <div className="min-h-screen bg-black text-white">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-green-500/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-green-400 flex items-center">
              <Trophy className="w-6 h-6 mr-2" />
              Leaderboard
            </h1>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Season 3</Badge>
          </div>
        </div>

        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900 border border-green-500/20">
              <TabsTrigger value="kills" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                <Target className="w-4 h-4 mr-1" />
                Kills
              </TabsTrigger>
              <TabsTrigger value="points" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                <Star className="w-4 h-4 mr-1" />
                Points
              </TabsTrigger>
              <TabsTrigger value="earnings" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
                <IndianRupee className="w-4 h-4 mr-1" />
                Earnings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="kills" className="space-y-4 mt-4">
              {/* Top 3 Podium */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {killsLeaderboard.slice(0, 3).map((player, index) => (
                  <Card
                    key={player.rank}
                    className={`${
                      index === 0
                        ? "bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-yellow-500/40 shadow-lg shadow-yellow-500/30 order-2"
                        : index === 1
                          ? "bg-gradient-to-br from-gray-400/20 to-gray-500/10 border-gray-400/40 shadow-lg shadow-gray-400/20 order-1"
                          : "bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-orange-500/40 shadow-lg shadow-orange-500/20 order-3"
                    } ${index === 0 ? "scale-105" : ""}`}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="relative mb-3">
                        <Avatar
                          className={`w-16 h-16 mx-auto border-4 ${
                            index === 0 ? "border-yellow-500" : index === 1 ? "border-gray-400" : "border-orange-500"
                          }`}
                        >
                          <AvatarImage
                            src={`/placeholder-ksw24.png?key=3tlif&height=64&width=64&text=${player.avatar}`}
                          />
                          <AvatarFallback
                            className={`text-black font-bold ${
                              index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-orange-500"
                            }`}
                          >
                            {player.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-black ${
                            index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-orange-500"
                          }`}
                        >
                          <Crown className="w-4 h-4" />
                        </div>
                      </div>
                      <p className="font-bold text-white text-sm">{player.name}</p>
                      <p className="text-xs text-gray-400 mb-2">{player.squad}</p>
                      <div className="space-y-1">
                        <p
                          className={`text-lg font-bold ${
                            index === 0 ? "text-yellow-400" : index === 1 ? "text-gray-300" : "text-orange-400"
                          }`}
                        >
                          {player.kills}
                        </p>
                        <p className="text-xs text-gray-400">Kills</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Rest of Leaderboard */}
              <div className="space-y-3">
                {killsLeaderboard.slice(3).map((player) => (
                  <Card
                    key={player.rank}
                    className={`bg-gray-900 border-green-500/20 ${
                      player.isCurrentUser
                        ? "shadow-lg shadow-green-500/30 border-green-500/50 bg-gradient-to-r from-green-500/10 to-green-600/5"
                        : ""
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">
                          #{player.rank}
                        </div>
                        <Avatar className="w-12 h-12 border-2 border-green-500/30">
                          <AvatarImage
                            src={`/placeholder_48x48.png?key=yhz42&height=48&width=48&text=${player.avatar}`}
                          />
                          <AvatarFallback className="bg-gray-800 text-green-400">{player.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className={`font-semibold ${player.isCurrentUser ? "text-green-400" : "text-white"}`}>
                            {player.name}
                          </p>
                          <p className="text-sm text-gray-400">{player.squad}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-400 text-lg">{player.kills}</p>
                          <p className="text-xs text-gray-400">{player.matches} matches</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="points" className="space-y-3 mt-4">
              <div className="text-center text-gray-400 py-8">
                <Star className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <p>Points leaderboard coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="earnings" className="space-y-3 mt-4">
              <div className="text-center text-gray-400 py-8">
                <IndianRupee className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                <p>Earnings leaderboard coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <BottomNavigation />
      </div>
    )
  }

  // Enhanced Live Streaming with YouTube/Twitch Integration
  const LiveScreen = () => {
    const [liveMatches] = useState([
      {
        id: 1,
        title: "Championship Finals - Elite vs Pro",
        viewers: 1247,
        status: "live",
        thumbnail: "/placeholder.svg?height=200&width=300&text=LIVE",
        streamer: "PUBG Arena Official",
        playersLeft: 23,
      },
      {
        id: 2,
        title: "Squad Battle Royale",
        viewers: 856,
        status: "live",
        thumbnail: "/placeholder.svg?height=200&width=300&text=LIVE2",
        streamer: "ProGamer TV",
        playersLeft: 45,
      },
    ])

    const previousMatches = [
      {
        id: 3,
        title: "Morning Championship Highlights",
        duration: "45:32",
        views: 2341,
        thumbnail: "/placeholder.svg?height=120&width=200&text=REPLAY1",
        uploadTime: "2 hours ago",
      },
      {
        id: 4,
        title: "Epic Squad Battle Moments",
        duration: "38:15",
        views: 1876,
        thumbnail: "/placeholder.svg?height=120&width=200&text=REPLAY2",
        uploadTime: "1 day ago",
      },
    ]

    return (
      <div className="min-h-screen bg-black text-white">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-green-500/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-green-400 flex items-center">
              <Video className="w-6 h-6 mr-2" />
              Live Streaming
            </h1>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-ping" />
              {liveMatches.length} LIVE
            </Badge>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="p-4 space-y-6">
            {/* Live Matches */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-red-400 flex items-center">
                <Flame className="w-5 h-5 mr-2" />
                Live Now
              </h2>

              {liveMatches.map((match) => (
                <Card
                  key={match.id}
                  className="bg-gray-900 border-red-500/30 shadow-lg shadow-red-500/20 overflow-hidden"
                >
                  <div className="relative">
                    <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Play className="w-16 h-16 text-red-400 z-10" />
                      <Badge className="absolute top-3 left-3 bg-red-500 text-white animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full mr-1 animate-ping" />
                        LIVE
                      </Badge>
                      <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                        <Eye className="w-3 h-3 mr-1" />
                        {match.viewers.toLocaleString()}
                      </Badge>
                      <div className="absolute bottom-3 left-3 text-white">
                        <p className="text-sm font-medium">{match.playersLeft} players left</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-white text-lg">{match.title}</h3>
                        <p className="text-sm text-gray-400">{match.streamer}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center text-red-400">
                            <Eye className="w-4 h-4 mr-1" />
                            {match.viewers.toLocaleString()} watching
                          </span>
                          <span className="flex items-center text-green-400">
                            <Users className="w-4 h-4 mr-1" />
                            {match.playersLeft} alive
                          </span>
                        </div>
                        <Button className="bg-red-500 hover:bg-red-600 text-white">
                          <Play className="w-4 h-4 mr-2" />
                          Watch
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Previous Matches */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-blue-400 flex items-center">
                <History className="w-5 h-5 mr-2" />
                Previous Matches
              </h2>

              {previousMatches.map((match) => (
                <Card key={match.id} className="bg-gray-900 border-blue-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className="w-24 h-16 bg-gray-800 rounded flex items-center justify-center">
                          <Play className="w-6 h-6 text-blue-400" />
                        </div>
                        <Badge className="absolute bottom-1 right-1 bg-black/80 text-white text-xs">
                          {match.duration}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{match.title}</h4>
                        <div className="flex items-center space-x-3 text-sm text-gray-400 mt-1">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {match.views.toLocaleString()} views
                          </span>
                          <span>{match.uploadTime}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-blue-500/50 text-blue-400 bg-transparent">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Streaming Schedule */}
            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Streams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { time: "18:00", title: "Evening Championship", status: "scheduled" },
                    { time: "20:30", title: "Pro League Finals", status: "scheduled" },
                  ].map((stream, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{stream.title}</p>
                        <p className="text-sm text-gray-400">{stream.time} Today</p>
                      </div>
                      <Button size="sm" variant="outline" className="border-green-500/50 text-green-400 bg-transparent">
                        <Bell className="w-4 h-4 mr-1" />
                        Notify
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        <BottomNavigation />
      </div>
    )
  }

  // Enhanced Settings with Anti-Cheat Policy
  const SettingsScreen = () => {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-green-500/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-green-400 flex items-center">
              <Settings className="w-6 h-6 mr-2" />
              Settings & Support
            </h1>
            <Button size="sm" variant="ghost">
              <User className="w-5 h-5 text-gray-400" />
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="p-4 space-y-6">
            {/* Profile Settings */}
            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Profile Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">PUBG In-Game ID</label>
                  <div className="flex space-x-2">
                    <Input className="bg-black border-gray-700 text-white flex-1" defaultValue="PlayerPro123" />
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black">
                      Update
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email Address</label>
                  <div className="flex space-x-2">
                    <Input className="bg-black border-gray-700 text-white flex-1" defaultValue="player@example.com" />
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black">
                      Update
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Phone Number</label>
                  <div className="flex space-x-2">
                    <Input className="bg-black border-gray-700 text-white flex-1" defaultValue="+91 98765 43210" />
                    <Button size="sm" variant="outline" className="border-green-500/50 text-green-400 bg-transparent">
                      Verify
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Anti-Cheat Policy - Prominently Featured */}
            <Card className="bg-gradient-to-br from-red-500/20 to-red-600/10 border-red-500/40 shadow-lg shadow-red-500/20">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center">
                  <Shield className="w-6 h-6 mr-2" />
                  Anti-Cheat Policy
                  <Badge className="ml-2 bg-red-500/30 text-red-300 border-red-500/50">IMPORTANT</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-red-400 mb-2">Zero Tolerance Policy</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        <li>• All matches are manually monitored by our admin team</li>
                        <li>• Use of any third-party software, hacks, or cheats is strictly prohibited</li>
                        <li>• Permanent ban for first-time offenders - no appeals</li>
                        <li>• Cheaters forfeit all winnings and account balance</li>
                        <li>• Device and IP bans may be applied for severe violations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gray-800 rounded-lg">
                    <Ban className="w-8 h-8 mx-auto mb-2 text-red-400" />
                    <p className="text-lg font-bold text-white">247</p>
                    <p className="text-xs text-gray-400">Players Banned</p>
                  </div>
                  <div className="text-center p-3 bg-gray-800 rounded-lg">
                    <Eye className="w-8 h-8 mx-auto mb-2 text-green-400" />
                    <p className="text-lg font-bold text-white">24/7</p>
                    <p className="text-xs text-gray-400">Live Monitoring</p>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Report Cheating
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-red-500/30 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-red-400">Report Cheating</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input placeholder="Suspected Player's PUBG ID" className="bg-black border-gray-700 text-white" />
                      <Input placeholder="Match ID (if available)" className="bg-black border-gray-700 text-white" />
                      <Select>
                        <SelectTrigger className="bg-black border-gray-700 text-white">
                          <SelectValue placeholder="Type of Cheating" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="aimbot">Aimbot/Auto-aim</SelectItem>
                          <SelectItem value="wallhack">Wall Hack/ESP</SelectItem>
                          <SelectItem value="speed">Speed Hack</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Textarea
                        placeholder="Describe the incident in detail..."
                        className="bg-black border-gray-700 text-white"
                        rows={4}
                      />
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Submit Report</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Support & Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-green-500/50 text-green-400 bg-transparent justify-start"
                >
                  <MessageSquare className="w-4 h-4 mr-3" />
                  Contact Support Team
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-500/50 text-green-400 bg-transparent justify-start"
                >
                  <MessageSquare className="w-4 h-4 mr-3" />
                  FAQ & Help Center
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-blue-500/50 text-blue-400 bg-transparent justify-start"
                >
                  <Video className="w-4 h-4 mr-3" />
                  How to Play Guide
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-purple-500/50 text-purple-400 bg-transparent justify-start"
                >
                  <Share2 className="w-4 h-4 mr-3" />
                  Share App with Friends
                </Button>
              </CardContent>
            </Card>

            {/* App Settings */}
            <Card className="bg-gray-900 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400">App Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Push Notifications</p>
                    <p className="text-sm text-gray-400">Match updates and results</p>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black">
                    ON
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Sound Effects</p>
                    <p className="text-sm text-gray-400">In-app sounds</p>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black">
                    ON
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Auto-join Squad</p>
                    <p className="text-sm text-gray-400">Automatically join available squads</p>
                  </div>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 bg-transparent">
                    OFF
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card className="bg-gray-900 border-red-500/20">
              <CardHeader>
                <CardTitle className="text-red-400">Account Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {userRole === "user" && (
                  <Button
                    variant="outline"
                    className="w-full border-blue-500/50 text-blue-400 bg-transparent justify-start"
                    onClick={() => setUserRole("admin")}
                  >
                    <Shield className="w-4 h-4 mr-3" />
                    Switch to Admin Panel
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full border-red-500/50 text-red-400 bg-transparent justify-start"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Logout
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-500/50 text-red-400 bg-transparent justify-start"
                >
                  <Ban className="w-4 h-4 mr-3" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>

            {/* App Info */}
            <div className="text-center text-gray-500 text-sm space-y-1">
              <p>PUBG Arena v2.1.0</p>
              <p>© 2024 Elite Gaming Solutions</p>
              <p>Terms of Service • Privacy Policy</p>
            </div>
          </div>
        </ScrollArea>

        <BottomNavigation />
      </div>
    )
  }

  // Enhanced Admin Panel with Prize Distribution
  const AdminPanel = () => {
    const [activeAdminTab, setActiveAdminTab] = useState("create")

    return (
      <div className="min-h-screen bg-black text-white">
        <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-red-500/20 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-red-400 flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Admin Panel
            </h1>
            <div className="flex items-center space-x-2">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Super Admin</Badge>
              <Button
                size="sm"
                variant="outline"
                className="border-green-500/50 text-green-400 bg-transparent"
                onClick={() => setUserRole("user")}
              >
                Switch to User
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <Tabs value={activeAdminTab} onValueChange={setActiveAdminTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900 border border-red-500/20">
              <TabsTrigger value="create" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Create
              </TabsTrigger>
              <TabsTrigger value="manage" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Manage
              </TabsTrigger>
              <TabsTrigger value="results" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Results
              </TabsTrigger>
              <TabsTrigger value="users" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Users
              </TabsTrigger>
            </TabsList>

            <TabsContent value="create" className="space-y-6 mt-4">
              <Card className="bg-gray-900 border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-red-400">Create New Match</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Match Name"
                    className="bg-black border-gray-700 text-white"
                    defaultValue="Championship Battle"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Entry Fee (₹)</label>
                      <Input className="bg-black border-gray-700 text-white" type="number" defaultValue="100" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Prize Pool (₹)</label>
                      <Input className="bg-black border-gray-700 text-white" type="number" defaultValue="8000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Max Players</label>
                      <Input className="bg-black border-gray-700 text-white" type="number" max="88" defaultValue="88" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Map</label>
                      <Select>
                        <SelectTrigger className="bg-black border-gray-700 text-white">
                          <SelectValue placeholder="Select Map" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="erangel">Erangel</SelectItem>
                          <SelectItem value="sanhok">Sanhok</SelectItem>
                          <SelectItem value="miramar">Miramar</SelectItem>
                          <SelectItem value="vikendi">Vikendi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Start Time</label>
                    <Input className="bg-black border-gray-700 text-white" type="datetime-local" />
                  </div>

                  {/* Enhanced Editable Prize Distribution */}
                  <Card className="bg-gray-800 border-green-500/20">
                    <CardHeader>
                      <CardTitle className="text-green-400 flex items-center justify-between">
                        <span className="flex items-center">
                          <Trophy className="w-5 h-5 mr-2" />
                          Prize Distribution Settings
                        </span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Editable</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Rank Rewards Section */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-green-400">Rank Rewards</h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">Total:</span>
                            <Input
                              className="bg-black border-gray-700 text-white w-24 text-center"
                              type="number"
                              defaultValue="6000"
                              placeholder="₹"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {[
                            { rank: "1st Place", defaultValue: 3000, color: "text-yellow-400" },
                            { rank: "2nd Place", defaultValue: 1500, color: "text-gray-300" },
                            { rank: "3rd Place", defaultValue: 800, color: "text-orange-400" },
                            { rank: "4th Place", defaultValue: 400, color: "text-blue-400" },
                            { rank: "5th Place", defaultValue: 300, color: "text-purple-400" },
                          ].map((prize, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-900 rounded">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                    index === 0
                                      ? "bg-yellow-500 text-black"
                                      : index === 1
                                        ? "bg-gray-400 text-black"
                                        : index === 2
                                          ? "bg-orange-500 text-black"
                                          : "bg-gray-600 text-white"
                                  }`}
                                >
                                  {index + 1}
                                </div>
                                <span className={`font-medium ${prize.color}`}>{prize.rank}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-400">₹</span>
                                <Input
                                  className="bg-black border-gray-700 text-white w-20 text-center"
                                  type="number"
                                  defaultValue={prize.defaultValue}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Kill Rewards Section */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-red-400">Kill Rewards</h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">Total:</span>
                            <Input
                              className="bg-black border-gray-700 text-white w-24 text-center"
                              type="number"
                              defaultValue="2000"
                              placeholder="₹"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400">Per Kill Reward</label>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400">₹</span>
                              <Input
                                className="bg-black border-gray-700 text-white flex-1"
                                type="number"
                                defaultValue="50"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400">Max Kill Rewards</label>
                            <Input
                              className="bg-black border-gray-700 text-white"
                              type="number"
                              defaultValue="10"
                              placeholder="Top killers"
                            />
                          </div>
                        </div>
                        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded">
                          <p className="text-sm text-red-300">
                            <Target className="w-4 h-4 inline mr-1" />
                            Kill rewards will be distributed to top killers automatically after match completion
                          </p>
                        </div>
                      </div>

                      {/* Custom Prize Categories */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-blue-400">Custom Rewards</h4>
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                            <Plus className="w-4 h-4 mr-1" />
                            Add Custom
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 bg-gray-900 rounded">
                            <div className="flex items-center space-x-3">
                              <Zap className="w-4 h-4 text-blue-400" />
                              <span className="text-blue-400">Most Damage Dealt</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400">₹</span>
                              <Input
                                className="bg-black border-gray-700 text-white w-20 text-center"
                                type="number"
                                defaultValue="200"
                              />
                              <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                                <Ban className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-gray-900 rounded">
                            <div className="flex items-center space-x-3">
                              <Award className="w-4 h-4 text-purple-400" />
                              <span className="text-purple-400">Longest Survival</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400">₹</span>
                              <Input
                                className="bg-black border-gray-700 text-white w-20 text-center"
                                type="number"
                                defaultValue="150"
                              />
                              <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                                <Ban className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Prize Distribution Summary */}
                      <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-green-400">Distribution Summary</h4>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Auto-Calculate</Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-lg font-bold text-yellow-400">₹6,000</p>
                            <p className="text-xs text-gray-400">Rank Rewards</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-red-400">₹2,000</p>
                            <p className="text-xs text-gray-400">Kill Rewards</p>
                          </div>
                          <div>
                            <p className="text-lg font-bold text-blue-400">₹350</p>
                            <p className="text-xs text-gray-400">Custom Rewards</p>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-700">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400">Total Distributed:</span>
                            <span className="text-lg font-bold text-green-400">₹8,350</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Prize Pool:</span>
                            <span className="text-white">₹8,000</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className={`${8350 > 8000 ? "text-red-400" : "text-green-400"}`}>
                              {8350 > 8000 ? "Exceeds by:" : "Remaining:"}
                            </span>
                            <span className={`font-bold ${8350 > 8000 ? "text-red-400" : "text-green-400"}`}>
                              ₹{Math.abs(8350 - 8000)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Match with Custom Prizes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="manage" className="space-y-4 mt-4">
              <Card className="bg-gray-900 border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-red-400">Active Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { id: 1, name: "Championship Battle", players: "64/88", status: "upcoming", time: "15:30" },
                      { id: 2, name: "Elite Squad Wars", players: "48/88", status: "upcoming", time: "16:00" },
                      { id: 3, name: "Pro League Finals", players: "23/88", status: "live", time: "14:30" },
                    ].map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <div>
                          <p className="font-medium text-white">{match.name}</p>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <span>{match.players} players</span>
                            <span>{match.time}</span>
                            <Badge
                              className={`${
                                match.status === "live"
                                  ? "bg-red-500/20 text-red-400 border-red-500/30"
                                  : "bg-green-500/20 text-green-400 border-green-500/30"
                              }`}
                            >
                              {match.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-blue-500/50 text-blue-400 bg-transparent"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-500/50 text-red-400 bg-transparent">
                            <Ban className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-red-400">System Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <p className="text-3xl font-bold text-green-400">1,247</p>
                      <p className="text-sm text-gray-400">Active Users</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <p className="text-3xl font-bold text-blue-400">23</p>
                      <p className="text-sm text-gray-400">Live Matches</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <p className="text-3xl font-bold text-yellow-400">₹2,45,000</p>
                      <p className="text-sm text-gray-400">Total Prize Pool</p>
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <p className="text-3xl font-bold text-red-400">12</p>
                      <p className="text-sm text-gray-400">Banned Today</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-4 mt-4">
              <Card className="bg-gray-900 border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-red-400">Upload Match Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select>
                    <SelectTrigger className="bg-black border-gray-700 text-white">
                      <SelectValue placeholder="Select Completed Match" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="match1">Championship Battle - 14:30</SelectItem>
                      <SelectItem value="match2">Elite Squad Wars - 13:00</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-400">Top 5 Squad Rankings</h4>
                    {[1, 2, 3, 4, 5].map((rank) => (
                      <div key={rank} className="flex items-center space-x-4 p-3 bg-gray-800 rounded-lg">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black">
                          {rank}
                        </div>
                        <Input
                          placeholder={`${rank === 1 ? "1st" : rank === 2 ? "2nd" : rank === 3 ? "3rd" : `${rank}th`} Place Squad Name`}
                          className="bg-black border-gray-700 text-white flex-1"
                        />
                        <Input placeholder="Kills" className="bg-black border-gray-700 text-white w-20" type="number" />
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">Auto Prize Distribution</h4>
                    <p className="text-sm text-gray-300">
                      System will automatically distribute ₹6,000 as rank rewards and ₹2,000 as kill rewards to top 10
                      killers at ₹50 per kill.
                    </p>
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600 text-black">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Results & Distribute Prizes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-4 mt-4">
              {/* Enhanced User Management with Ban Access Controls */}
              <Card className="bg-gray-900 border-red-500/20">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center justify-between">
                    User Management & Ban Controls
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost">
                        <Search className="w-4 h-4 text-gray-400" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Filter className="w-4 h-4 text-gray-400" />
                      </Button>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                        <Shield className="w-3 h-3 mr-1" />
                        Admin Access
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Search and Filter Controls */}
                  <div className="flex space-x-2 mb-4">
                    <Input
                      placeholder="Search by PUBG ID, Name, or Email..."
                      className="bg-black border-gray-700 text-white flex-1"
                    />
                    <Select>
                      <SelectTrigger className="bg-black border-gray-700 text-white w-32">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="banned">Banned</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* User List with Enhanced Ban Controls */}
                  <div className="space-y-3">
                    {[
                      {
                        name: "PlayerPro123",
                        pubgId: "PlayerPro123",
                        email: "player@example.com",
                        status: "active",
                        matches: 45,
                        winnings: 12450,
                        joinDate: "2024-01-15",
                        lastActive: "2 hours ago",
                        reports: 0,
                        deviceId: "DEVICE_001",
                      },
                      {
                        name: "WarriorX",
                        pubgId: "WarriorX99",
                        email: "warrior@example.com",
                        status: "active",
                        matches: 38,
                        winnings: 8900,
                        joinDate: "2024-02-01",
                        lastActive: "5 minutes ago",
                        reports: 1,
                        deviceId: "DEVICE_002",
                      },
                      {
                        name: "SniperKing",
                        pubgId: "SniperKing",
                        email: "sniper@example.com",
                        status: "banned",
                        matches: 12,
                        winnings: 0,
                        joinDate: "2024-01-20",
                        lastActive: "3 days ago",
                        reports: 5,
                        banReason: "Cheating/Hacking",
                        banDate: "2024-01-25",
                        deviceId: "DEVICE_003",
                      },
                      {
                        name: "CheaterUser",
                        pubgId: "CheaterUser",
                        email: "cheater@example.com",
                        status: "suspended",
                        matches: 8,
                        winnings: 0,
                        joinDate: "2024-02-10",
                        lastActive: "1 day ago",
                        reports: 3,
                        suspendReason: "Under Investigation",
                        deviceId: "DEVICE_004",
                      },
                    ].map((user, index) => (
                      <Card
                        key={index}
                        className={`bg-gray-800 border-gray-700 ${
                          user.status === "banned"
                            ? "border-red-500/50 bg-red-500/5"
                            : user.status === "suspended"
                              ? "border-yellow-500/50 bg-yellow-500/5"
                              : ""
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <Avatar className="w-12 h-12 border-2 border-green-500/30">
                                <AvatarFallback className="bg-gray-700 text-green-400">{user.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <p className="font-medium text-white">{user.name}</p>
                                  <Badge
                                    className={`text-xs ${
                                      user.status === "active"
                                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                                        : user.status === "banned"
                                          ? "bg-red-500/20 text-red-400 border-red-500/30"
                                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                    }`}
                                  >
                                    {user.status.toUpperCase()}
                                  </Badge>
                                  {user.reports > 0 && (
                                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                                      <AlertTriangle className="w-3 h-3 mr-1" />
                                      {user.reports} reports
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-green-400">{user.pubgId}</p>
                                <p className="text-xs text-gray-400">{user.email}</p>
                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                  <span>Joined: {user.joinDate}</span>
                                  <span>Last active: {user.lastActive}</span>
                                  <span>Device: {user.deviceId}</span>
                                </div>
                              </div>
                            </div>

                            <div className="text-right space-y-1">
                              <p className="text-sm font-medium text-white">{user.matches} matches</p>
                              <p className="text-sm text-green-400">₹{user.winnings.toLocaleString()}</p>
                              {user.status === "banned" && (
                                <div className="text-xs text-red-400">
                                  <p>Banned: {user.banDate}</p>
                                  <p>Reason: {user.banReason}</p>
                                </div>
                              )}
                              {user.status === "suspended" && (
                                <div className="text-xs text-yellow-400">
                                  <p>Status: {user.suspendReason}</p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Enhanced Action Buttons */}
                          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-700">
                            <div className="flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-blue-500/50 text-blue-400 bg-transparent"
                                  >
                                    <Eye className="w-4 h-4 mr-1" />
                                    View Details
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-gray-900 border-blue-500/30 text-white max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle className="text-blue-400">User Details - {user.name}</DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <h4 className="font-semibold text-green-400">Account Information</h4>
                                        <div className="space-y-1 text-sm">
                                          <p>
                                            <span className="text-gray-400">PUBG ID:</span> {user.pubgId}
                                          </p>
                                          <p>
                                            <span className="text-gray-400">Email:</span> {user.email}
                                          </p>
                                          <p>
                                            <span className="text-gray-400">Join Date:</span> {user.joinDate}
                                          </p>
                                          <p>
                                            <span className="text-gray-400">Device ID:</span> {user.deviceId}
                                          </p>
                                          <p>
                                            <span className="text-gray-400">Last Active:</span> {user.lastActive}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="space-y-2">
                                        <h4 className="font-semibold text-yellow-400">Game Statistics</h4>
                                        <div className="space-y-1 text-sm">
                                          <p>
                                            <span className="text-gray-400">Total Matches:</span> {user.matches}
                                          </p>
                                          <p>
                                            <span className="text-gray-400">Total Winnings:</span> ₹
                                            {user.winnings.toLocaleString()}
                                          </p>
                                          <p>
                                            <span className="text-gray-400">Win Rate:</span> 28%
                                          </p>
                                          <p>
                                            <span className="text-gray-400">Average Kills:</span> 3.2
                                          </p>
                                          <p>
                                            <span className="text-gray-400">Reports:</span> {user.reports}
                                          </p>
                                        </div>
                                      </div>
                                    </div>

                                    {user.status === "banned" && (
                                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded">
                                        <h4 className="font-semibold text-red-400 mb-2">Ban Information</h4>
                                        <p className="text-sm text-gray-300">Reason: {user.banReason}</p>
                                        <p className="text-sm text-gray-300">Date: {user.banDate}</p>
                                        <p className="text-sm text-gray-300">Type: Permanent Ban</p>
                                      </div>
                                    )}

                                    <div className="space-y-2">
                                      <h4 className="font-semibold text-red-400">Recent Match History</h4>
                                      <div className="space-y-1 text-sm max-h-32 overflow-y-auto">
                                        {[1, 2, 3].map((i) => (
                                          <div key={i} className="flex justify-between p-2 bg-gray-800 rounded">
                                            <span>Championship Battle #{i}</span>
                                            <span className="text-gray-400">Rank #5, 3 kills</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>

                              {user.status === "active" && (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="border-yellow-500/50 text-yellow-400 bg-transparent"
                                    >
                                      <AlertTriangle className="w-4 h-4 mr-1" />
                                      Suspend
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="bg-gray-900 border-yellow-500/30 text-white">
                                    <DialogHeader>
                                      <DialogTitle className="text-yellow-400">Suspend User - {user.name}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded">
                                        <p className="text-sm text-yellow-300">
                                          <AlertTriangle className="w-4 h-4 inline mr-1" />
                                          Suspension temporarily restricts user access while under investigation
                                        </p>
                                      </div>
                                      <Select>
                                        <SelectTrigger className="bg-black border-gray-700 text-white">
                                          <SelectValue placeholder="Suspension Duration" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-800 border-gray-700">
                                          <SelectItem value="24h">24 Hours</SelectItem>
                                          <SelectItem value="3d">3 Days</SelectItem>
                                          <SelectItem value="7d">7 Days</SelectItem>
                                          <SelectItem value="indefinite">Indefinite</SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <Textarea
                                        placeholder="Reason for suspension..."
                                        className="bg-black border-gray-700 text-white"
                                        rows={3}
                                      />
                                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                                        Suspend User
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              )}
                            </div>

                            <div className="flex space-x-2">
                              {user.status === "banned" ? (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black">
                                      <CheckCircle className="w-4 h-4 mr-1" />
                                      Unban
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="bg-gray-900 border-green-500/30 text-white">
                                    <DialogHeader>
                                      <DialogTitle className="text-green-400">Unban User - {user.name}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="p-3 bg-green-500/10 border border-green-500/30 rounded">
                                        <p className="text-sm text-green-300">
                                          <CheckCircle className="w-4 h-4 inline mr-1" />
                                          This will restore full access to the user's account
                                        </p>
                                      </div>
                                      <Textarea
                                        placeholder="Reason for unbanning (optional)..."
                                        className="bg-black border-gray-700 text-white"
                                        rows={3}
                                      />
                                      <Button className="w-full bg-green-500 hover:bg-green-600 text-black">
                                        Restore Account Access
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              ) : user.status === "suspended" ? (
                                <div className="flex space-x-1">
                                  <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Restore
                                  </Button>
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                                        <Ban className="w-4 h-4 mr-1" />
                                        Ban
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-gray-900 border-red-500/30 text-white">
                                      <DialogHeader>
                                        <DialogTitle className="text-red-400">Permanent Ban - {user.name}</DialogTitle>
                                      </DialogHeader>
                                      <div className="space-y-4">
                                        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded">
                                          <p className="text-sm text-red-300">
                                            <Ban className="w-4 h-4 inline mr-1" />
                                            This action will permanently ban the user and forfeit all winnings
                                          </p>
                                        </div>
                                        <Select>
                                          <SelectTrigger className="bg-black border-gray-700 text-white">
                                            <SelectValue placeholder="Ban Reason" />
                                          </SelectTrigger>
                                          <SelectContent className="bg-gray-800 border-gray-700">
                                            <SelectItem value="cheating">Cheating/Hacking</SelectItem>
                                            <SelectItem value="toxic">Toxic Behavior</SelectItem>
                                            <SelectItem value="multiple">Multiple Accounts</SelectItem>
                                            <SelectItem value="fraud">Fraudulent Activity</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                          </SelectContent>
                                        </Select>
                                        <div className="flex items-center space-x-2">
                                          <input type="checkbox" className="rounded" />
                                          <label className="text-sm text-gray-300">
                                            Also ban device and IP address
                                          </label>
                                        </div>
                                        <Textarea
                                          placeholder="Additional details and evidence..."
                                          className="bg-black border-gray-700 text-white"
                                          rows={3}
                                        />
                                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                                          Confirm Permanent Ban
                                        </Button>
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </div>
                              ) : (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                                      <Ban className="w-4 h-4 mr-1" />
                                      Ban User
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="bg-gray-900 border-red-500/30 text-white">
                                    <DialogHeader>
                                      <DialogTitle className="text-red-400">Ban User - {user.name}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded">
                                        <div className="flex items-start space-x-2">
                                          <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                                          <div>
                                            <p className="text-sm text-red-300 font-semibold mb-1">
                                              Warning: Permanent Action
                                            </p>
                                            <ul className="text-xs text-red-200 space-y-1">
                                              <li>• User will lose access to their account permanently</li>
                                              <li>• All winnings and wallet balance will be forfeited</li>
                                              <li>• Device and IP may be blocked from creating new accounts</li>
                                              <li>• This action cannot be easily reversed</li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-3">
                                        <div>
                                          <label className="text-sm text-gray-400 mb-2 block">Ban Reason *</label>
                                          <Select>
                                            <SelectTrigger className="bg-black border-gray-700 text-white">
                                              <SelectValue placeholder="Select ban reason" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-gray-800 border-gray-700">
                                              <SelectItem value="cheating">Cheating/Hacking</SelectItem>
                                              <SelectItem value="toxic">Toxic Behavior</SelectItem>
                                              <SelectItem value="multiple">Multiple Accounts</SelectItem>
                                              <SelectItem value="fraud">Fraudulent Activity</SelectItem>
                                              <SelectItem value="match_fixing">Match Fixing</SelectItem>
                                              <SelectItem value="other">Other Violation</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>

                                        <div>
                                          <label className="text-sm text-gray-400 mb-2 block">Evidence/Details *</label>
                                          <Textarea
                                            placeholder="Provide detailed evidence and reasoning for this ban..."
                                            className="bg-black border-gray-700 text-white"
                                            rows={4}
                                          />
                                        </div>

                                        <div className="space-y-2">
                                          <div className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <label className="text-sm text-gray-300">
                                              Ban device ID ({user.deviceId})
                                            </label>
                                          </div>
                                          <div className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <label className="text-sm text-gray-300">Ban IP address</label>
                                          </div>
                                          <div className="flex items-center space-x-2">
                                            <input type="checkbox" className="rounded" />
                                            <label className="text-sm text-gray-300">
                                              Forfeit wallet balance (₹{user.winnings.toLocaleString()})
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex space-x-2">
                                        <Button
                                          variant="outline"
                                          className="flex-1 border-gray-600 text-gray-400 bg-transparent"
                                        >
                                          Cancel
                                        </Button>
                                        <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                                          <Ban className="w-4 h-4 mr-2" />
                                          Confirm Ban
                                        </Button>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Bulk Actions */}
                  <Card className="bg-gray-800 border-red-500/20 mt-4">
                    <CardHeader>
                      <CardTitle className="text-red-400 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Bulk Ban Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-400">Ban Multiple Users</label>
                          <Textarea
                            placeholder="Enter PUBG IDs separated by commas..."
                            className="bg-black border-gray-700 text-white"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-400">Ban Reason</label>
                          <Select>
                            <SelectTrigger className="bg-black border-gray-700 text-white">
                              <SelectValue placeholder="Select reason" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                              <SelectItem value="cheating">Cheating/Hacking</SelectItem>
                              <SelectItem value="toxic">Toxic Behavior</SelectItem>
                              <SelectItem value="multiple">Multiple Accounts</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-2">
                            <Ban className="w-4 h-4 mr-2" />
                            Bulk Ban Users
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    )
  }

  // Enhanced Bottom Navigation
  const BottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-green-500/20 z-50">
      <div className="flex items-center justify-around py-2">
        {[
          { icon: Home, label: "Home", screen: "home" },
          { icon: Users, label: "Squad", screen: "squad" },
          { icon: Gamepad2, label: "Matches", screen: "matches" },
          { icon: Trophy, label: "Leaderboard", screen: "leaderboard" },
          { icon: Settings, label: "Settings", screen: "settings" },
        ].map((item) => (
          <Button
            key={item.screen}
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 transition-all duration-200 ${
              currentScreen === item.screen
                ? "text-green-400 bg-green-500/10 shadow-lg shadow-green-500/20"
                : "text-gray-400 hover:text-green-400"
            }`}
            onClick={() => setCurrentScreen(item.screen)}
          >
            <item.icon className={`w-5 h-5 ${currentScreen === item.screen ? "animate-pulse" : ""}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )

  // Main App Router
  if (!isLoggedIn) {
    return <LoginScreen />
  }

  if (userRole === "admin") {
    return <AdminPanel />
  }

  switch (currentScreen) {
    case "home":
      return <HomeScreen />
    case "squad":
      return <SquadScreen />
    case "wallet":
      return <WalletScreen />
    case "matches":
      return <MyMatchesScreen />
    case "leaderboard":
      return <LeaderboardScreen />
    case "live":
      return <LiveScreen />
    case "settings":
      return <SettingsScreen />
    default:
      return <HomeScreen />
  }
}
