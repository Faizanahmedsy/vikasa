import { SimpleCard } from "@/components/shared/simple-card";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function MobileMenuDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <div className="grid grid-cols-3 px-4 gap-4">
          {Array.from({ length: 6 }).map((item, index) => {
            return <SimpleCard key={index}>foo</SimpleCard>;
          })}
        </div>
        <DrawerFooter>
          <div className="flex justify-center items-center gap-5">
            <Facebook />
            <Linkedin />
            <Instagram />
            <Twitter />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
