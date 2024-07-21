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
import { Edit, Trash, Coffee } from "lucide-react";

const coffeeItems = [
  { id: 1, name: "Espresso", price: "$2.50", category: "Hot Coffee" },
  { id: 2, name: "Cappuccino", price: "$3.50", category: "Hot Coffee" },
  { id: 3, name: "Latte", price: "$3.75", category: "Hot Coffee" },
  { id: 4, name: "Iced Coffee", price: "$3.00", category: "Cold Coffee" },
  { id: 5, name: "Cold Brew", price: "$4.00", category: "Cold Coffee" },
];

const CoffeeMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoffeeItems = coffeeItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Coffee Menu</h1>
      <div className="mb-4 flex justify-between items-center">
        <Input
          placeholder="Search coffee items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>
          <Coffee className="mr-2 h-4 w-4" /> Add Coffee Item
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCoffeeItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
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

export default CoffeeMenu;