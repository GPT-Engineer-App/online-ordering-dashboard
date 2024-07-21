import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Users, DollarSign, Coffee } from "lucide-react";

const DashboardCard = ({ title, value, icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const Analytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <DashboardCard
          title="Total Orders"
          value="1,234"
          icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Total Revenue"
          value="$45,678"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Active Users"
          value="5,678"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Coffee Varieties"
          value="25"
          icon={<Coffee className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Order Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Order trend chart placeholder
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Revenue trend chart placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;