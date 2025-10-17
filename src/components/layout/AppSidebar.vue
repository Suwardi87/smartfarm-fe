<script setup>
import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/~sidebar"
import SidebarHeader from "../ui/~sidebar/SidebarHeader.vue"
import SidebarTrigger from "../ui/~sidebar/SidebarTrigger.vue"

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Search", url: "/search", icon: Search },
  { title: "Settings", url: "/settings", icon: Settings },
]
</script>

<template>
  <Sidebar>
    <!-- 🧩 HEADER -->
    <SidebarHeader>
      <h2 class="font-semibold text-lg truncate">SmartFarm</h2>
      <!-- Tombol toggle bisa ditaruh di sini -->
      <SidebarTrigger />
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <!-- ✅ perbaikan di sini: gunakan :to dan tanda kutip ganda -->
                <RouterLink
                  :to="item.url"
                  class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  <component :is="item.icon" class="w-4 h-4" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
