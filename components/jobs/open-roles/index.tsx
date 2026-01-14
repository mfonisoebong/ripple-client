import { ChevronDown, Search } from "lucide-react";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/dropdown";
import { Input } from "@/components/common/form/input";
import { madeSoulmaze } from "@/lib/fonts";

export const OpenRoles: FC = () => {
  return (
    <section className={"py-12"}>
      <Container className={"max-w-4xl space-y-8"}>
        <h2
          className={`text-center text-2xl md:text-3xl lg:text-4xl ${madeSoulmaze.className}`}
        >
          open <span className={"text-[#DE03B5]"}>roles</span>
        </h2>
        <div className="space-y-4">
          <RoleSearch />
          <RoleFilter />
        </div>
      </Container>
    </section>
  );
};

const RoleFilter: FC = () => {
  return (
    <div
      className={"flex justify-center md:items-center gap-2 md:gap-6 flex-wrap"}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Category</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Experience Level</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Job type</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Job style</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Location</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span>Date</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const RoleSearch: FC = () => {
  return (
    <div className={"w-full flex justify-center relative"}>
      <Input
        placeholder={"Search for jobs"}
        className={
          "md:w-11/12 rounded-full h-12 bg-[#F5F5F5] text-xs md:text-sm border-transparent pr-12"
        }
      />
      <Search
        className={"stroke-1 absolute size-4 top-1/3 right-4 md:right-14"}
      />
    </div>
  );
};
