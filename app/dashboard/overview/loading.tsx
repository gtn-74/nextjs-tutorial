// loadingタイムだけに表示されるページ
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}

// DashboardSkeletonコンポーネントをインポートすることで、コンポーネントの形状は保持しつつ中身を透明として