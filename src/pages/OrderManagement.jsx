import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Edit, Trash } from "lucide-react";

const orders = [
  { id: 1, customer: "John Doe", date: "2023-03-01", status: "Delivered", total: "$15.99", items: "Latte, Croissant" },
  { id: 2, customer: "Jane Smith", date: "2023-03-02", status: "Processing", total: "$12.50", items: "Cappuccino, Muffin" },
  { id: 3, customer: "Bob Johnson", date: "2023-03-03", status: "Shipped", total: "$18.75", items: "Mocha, Sandwich" },
];

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toString().includes(searchTerm)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Order Management</h1>
      <div className="mb-4">
        <Input
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderManagement;