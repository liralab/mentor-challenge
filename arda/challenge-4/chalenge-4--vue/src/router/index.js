import { createRouter, createWebHistory } from "vue-router/dist/vue-router";
import DailyView from "@/components/Daily";
import WeeklyView from "@/components/Weekly";
import MonthlyView from "@/components/Monthly";

const routes = [
    {
        path: '/',
        name: 'DailyView',
        component: DailyView
    },
    {
        path: '/weekly-view',
        name: 'Weekly',
        component: WeeklyView
    },
    {
        path: '/monthly-view',
        name: 'MonthlyView',
        component: MonthlyView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;