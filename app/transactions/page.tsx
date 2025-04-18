"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TransactionTable } from "@/components/transactions/transaction-table";
import {
  DateRangePicker,
  type DateRange,
} from "@/components/ui/date-range-picker";
import { TransactionPieChart } from "@/components/transactions/transaction-pie-chart";
import { TransactionBarChart } from "@/components/transactions/transaction-bar-chart";
import { TransactionAreaChart } from "@/components/transactions/transaction-area-chart";
import { TransactionSummaryCards } from "@/components/transactions/transaction-summary-cards";
import { DownloadIcon } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { useTransactions } from "@/hooks/use-transactions";
import { Skeleton } from "@/components/ui/skeleton";

export default function TransactionsPage() {
  const { user } = useUser();
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2025, 2, 1),
    to: new Date(2025, 2, 25),
  });

  const { data, isLoading } = useTransactions({
    clerkId: user?.id as string,
  });

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-muted-foreground">
          Please sign in to view your transactions
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <Skeleton className="h-8 w-[200px]" />
            <Skeleton className="h-4 w-[300px] mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-[120px] w-full" />
          ))}
        </div>
        <Skeleton className="h-[300px] w-full" />
        <Skeleton className="h-[300px] w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-[300px] w-full" />
          <Skeleton className="h-[300px] w-full" />
        </div>
        <Skeleton className="h-[500px] w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">
            View and analyze your transaction history
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <DateRangePicker
            date={dateRange}
            setDate={setDateRange}
            className="w-full sm:w-auto"
          />
          <Button variant="outline" size="icon" title="Export Data">
            <DownloadIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <TransactionSummaryCards dateRange={dateRange} />

      <TransactionAreaChart dateRange={dateRange} />

      {/* Bar Chart */}
      <TransactionBarChart dateRange={dateRange} />

      {/* Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
            <CardDescription>Your top expense categories</CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionPieChart type="expense" dateRange={dateRange} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Income Sources</CardTitle>
            <CardDescription>Your top income sources</CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionPieChart type="income" dateRange={dateRange} />
          </CardContent>
        </Card>
      </div>

      {/* Transaction Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction Details</CardTitle>
          <CardDescription>Detailed list of all transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionTable dateRange={dateRange} />
        </CardContent>
      </Card>
    </div>
  );
}
