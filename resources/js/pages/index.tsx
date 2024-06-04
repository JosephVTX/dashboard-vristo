import DashboardLayout from "@/layouts/dashboard-layout";
import { useCounterStore } from "@/store/counterStore";

export default function index() {
    const { count, increment, decrement } = useCounterStore();
    return (
        <DashboardLayout>
            {count}

            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
        </DashboardLayout>
    );
}
