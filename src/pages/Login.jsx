import React from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Heart, Chrome, Github, Apple, Mail, ArrowLeft, Shield, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Logo from '@/components/shared/Logo';
import AfricanPattern from '@/components/shared/AfricanPattern';
import { useLanguage } from '@/components/i18n/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Login() {
    const { t } = useLanguage();
    const location = useLocation();

    // Get the redirect URL from query params
    const urlParams = new URLSearchParams(location.search);
    const fromUrl = urlParams.get('from_url') || window.location.origin + createPageUrl('Home');

    const handleSocialLogin = (provider) => {
        // This will redirect to the selected provider
        base44.auth.socialLogin(provider, fromUrl);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-amber-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <AfricanPattern className="text-white" opacity={0.08} />

            {/* Floating Sparkles for Premium Feel */}
            <div className="absolute top-20 left-10 text-amber-400 opacity-20 animate-pulse">
                <Sparkles size={40} />
            </div>
            <div className="absolute bottom-20 right-10 text-purple-300 opacity-20 animate-pulse">
                <Sparkles size={30} />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-8">
                    <Link to={createPageUrl('Landing')} className="inline-block">
                        <div className="mb-4 transform hover:scale-105 transition-transform">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c70dbf312aa4658a9066/539bcd82a_EA8B1C93-B120-4D4F-A79F-9725395A9A37.png"
                                alt="Afrinnect"
                                className="h-16 md:h-20 w-auto mx-auto"
                            />
                        </div>
                    </Link>
                    <h1 className="text-2xl font-bold text-white tracking-tight">Welcome to Afrinnect</h1>
                    <p className="text-purple-200 text-sm mt-2">Connect with your cultural soulmate</p>
                </div>

                <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-xl">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl text-center font-bold text-gray-900">Sign In</CardTitle>
                        <CardDescription className="text-center">
                            Choose your preferred login method
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-3">
                            <Button
                                variant="outline"
                                onClick={() => handleSocialLogin('google')}
                                className="h-12 border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-3 transition-all active:scale-95"
                            >
                                <Chrome className="w-5 h-5 text-red-500" />
                                <span className="font-semibold text-gray-700">Continue with Google</span>
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => handleSocialLogin('apple')}
                                className="h-12 border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-3 transition-all active:scale-95"
                            >
                                <Apple size={20} className="fill-black" />
                                <span className="font-semibold text-gray-700">Continue with Apple</span>
                            </Button>
                        </div>

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-200"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-gray-400 font-medium">Coming soon</span>
                            </div>
                        </div>

                        <Button
                            disabled
                            variant="secondary"
                            className="h-12 flex items-center justify-center gap-3 bg-gray-100 text-gray-400 cursor-not-allowed"
                        >
                            <Mail size={18} />
                            <span className="font-semibold">Email or Phone</span>
                        </Button>

                        <div className="mt-6 pt-6 border-t border-gray-100 italic text-center text-xs text-gray-500">
                            <p>By signing in, you agree to our <Link to={createPageUrl('Terms')} className="text-purple-600 hover:underline">Terms</Link> and <Link to={createPageUrl('Privacy')} className="text-purple-600 hover:underline">Privacy Policy</Link>.</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Back Link */}
                <div className="text-center mt-8">
                    <Link
                        to={createPageUrl('Landing')}
                        className="text-purple-200 hover:text-white flex items-center justify-center gap-2 text-sm font-medium transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>

                {/* Trust Signals */}
                <div className="flex items-center justify-center gap-6 mt-12 opacity-60">
                    <div className="flex flex-col items-center">
                        <Shield size={20} className="text-white mb-1" />
                        <span className="text-[10px] text-white font-medium uppercase tracking-widest">Secure</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heart size={20} className="text-white mb-1" />
                        <span className="text-[10px] text-white font-medium uppercase tracking-widest">Verified</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
