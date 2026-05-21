import DashboardOverview from '@/components/Dashboard/DashboardOverview'
import { statsApi } from '@/service/stats'
import { blogApi } from '@/service/blog'
import { userApi } from '@/service/user'
import { projectApi } from '@/service/projects'
import { reviewApi } from '@/service/review'
import { STATS } from '@/service/type'
import React from 'react'

export const dynamic = 'force-dynamic';

async function buildStats(): Promise<STATS> {
  const [statsRes, blogsRes, usersRes, projectsRes, reviewsRes] = await Promise.allSettled([
    statsApi.getStats(),
    blogApi.getBlogs(),
    userApi.getAllUsers(),
    projectApi.getAllProjects(),
    reviewApi.getReview(),
  ]);

  const baseStats: any = statsRes.status === 'fulfilled' ? statsRes.value : {};

  const unwrap = (val: any) => Array.isArray(val) ? val : (Array.isArray(val?.data) ? val.data : []);

  const blogsCount = blogsRes.status === 'fulfilled' ? unwrap(blogsRes.value).length : 0;
  const usersCount = usersRes.status === 'fulfilled' ? unwrap(usersRes.value).length : (baseStats.usersCount ?? 0);
  const projectsCount = projectsRes.status === 'fulfilled' ? unwrap(projectsRes.value).length : (baseStats.projectsCount ?? 0);
  const reviewsCount = reviewsRes.status === 'fulfilled' ? unwrap(reviewsRes.value).length : (baseStats.reviewsCount ?? 0);

  return {
    usersCount,
    projectsCount,
    reviewsCount,
    blogsCount,
  };
}

export default async function DashboardPage() {
  const stats = await buildStats();

  return (
    <div className="py-10">
        <DashboardOverview stats={stats} />
    </div>
  )
}
