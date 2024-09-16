"use client"

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { isOpen, onClose } = useNewAccount();

  return (
    <div>
    </div>
  )
}
