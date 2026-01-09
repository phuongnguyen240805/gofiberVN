import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"; // Sử dụng shadcn/ui có sẵn
import { Input } from "@/components/ui/input";
import { api } from '@/utils/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const loginMutation = api.medusa.loginUser.useMutation({
    onSuccess: (data) => {
      const token = typeof data === 'string' ? data : (data as any).token;

      const expires = new Date();
      // expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000));
      expires.setTime(expires.getTime() + (60 * 60 * 1000));
      document.cookie = `medusa_jwt=${token};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
      localStorage.setItem('medusa_jwt', token);

      window.location.href = "/";
    },
    onError: (err) => {
      alert(err.message);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1760f3] p-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-gray-800 bg-[#033985] p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Đăng nhập</h2>
          <p className="mt-2 text-sm text-gray-400 font-medium">Đăng nhập để quản lý dịch vụ</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0f1115] border-gray-700 text-white"
              required
            />
            <Input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#0f1115] border-gray-700 text-white"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg font-bold">
            Đăng Nhập
          </Button>
        </form>

        <p className="text-center text-xs text-gray-500">
          Chưa có tài khoản? <a href="#" className="text-blue-500 hover:underline">Liên hệ bộ phận hỗ trợ</a>
        </p>
      </div>
    </div>
  );
}