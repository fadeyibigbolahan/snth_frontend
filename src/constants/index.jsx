import {
  Home,
  Headset,
  ArrowRightLeft,
  Wallet,
  Network,
  UserCheck,
  Code,
  CreditCard,
  ShoppingCart,
} from "lucide-react";

export const navbarLinks = [
  {
    title: "",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/dashboard",
      },
      {
        label: "My Transactions",
        icon: ArrowRightLeft,
        path: "/dashboard/transactions",
      },
      {
        label: "Payments",
        icon: Wallet,
        path: "/dashboard/payments",
      },
      {
        label: "My PV",
        icon: Network,
        path: "/dashboard/my-PV",
      },
    ],
  },
];

export const navbarLinksAdmin = [
  {
    title: "Admin",
    links: [
      {
        label: "Generate Codes",
        icon: Code,
        path: "/dashboard/generate-codes",
      },
      {
        label: "Add Earning",
        icon: CreditCard,
        path: "/dashboard/add-earning",
      },
      {
        label: "Withdrawal Request",
        icon: CreditCard,
        path: "/dashboard/withdrawal-request",
      },
      {
        label: "User's PV",
        icon: Network,
        path: "/dashboard/user-PV",
      },
    ],
  },
];

export const transactionHeading = [
  {
    id: 1,
    name: "S/N",
  },
  {
    id: 2,
    name: "DESCRIPTION",
  },
  {
    id: 3,
    name: "AMOUNT (USD)",
  },
  {
    id: 4,
    name: "BALANCE (USD)",
  },
  {
    id: 5,
    name: "TYPE",
  },
  {
    id: 6,
    name: "TRANSACTION ID",
  },
  {
    id: 7,
    name: "DATE",
  },
];

export const earningHeading = [
  {
    id: 1,
    name: "S/N",
  },
  {
    id: 2,
    name: "DESCRIPTION",
  },
  {
    id: 3,
    name: "AMOUNT (USD)",
  },
  {
    id: 4,
    name: "POST BALANCE (USD)",
  },
  {
    id: 5,
    name: "PRODUCT",
  },
  {
    id: 6,
    name: "TYPE",
  },
  {
    id: 8,
    name: "DATE",
  },
];

export const SNTHPackages = [
  {
    _id: 1,
    name: "STARTER",
    price: 5000,
    description: "This is the starter package",
  },
  {
    _id: 2,
    name: "GOLD",
    price: 10000,
    description: "This is the gold package",
  },
  {
    _id: 3,
    name: "DIAMOND",
    price: 20000,
    description: "This is the diamond package",
  },
  {
    _id: 4,
    name: "ELITE",
    price: 30000,
    description: "This is the elite package",
  },
  {
    _id: 5,
    name: "SUPREME",
    price: 40000,
    description: "This is the supreme package",
  },
  {
    _id: 6,
    name: "MEGA",
    price: 50000,
    description: "This is the mega package",
  },
  {
    _id: 7,
    name: "ROYAL",
    price: 100000,
    description: "This is the royal package",
  },
];

export const vendors = [
  {
    _id: "1",
    name: "Vendor 1",
    url: "https://wa.me/2348032139983?text=Hi,%20I%20want%20to%20get%20a%20package%20code%20of____________",
  },
  {
    _id: "2",
    name: "Vendor 2",
    url: "https://wa.me/2348032139983?text=Hi,%20I%20want%20to%20get%20a%20package%20code%20of____________",
  },
  {
    _id: "3",
    name: "Vendor 3",
    url: "https://wa.me/2348032139983?text=Hi,%20I%20want%20to%20get%20a%20package%20code%20of____________",
  },
];
