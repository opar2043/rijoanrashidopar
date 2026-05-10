import DashboardOverview from '@/components/Dashboard/DashboardOverview'
import { statsApi } from '@/service/stats'
import React from 'react'

export default async function DashboardPage() {
  const stats = await statsApi.getStats();

  return (
    <div className="py-10">
        <DashboardOverview stats={stats} />
    </div>
  )
}
