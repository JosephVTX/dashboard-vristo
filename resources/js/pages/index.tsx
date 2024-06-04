import DashboardLayout from "@/layouts/dashboard-layout";
import { useCounterStore } from "@/store/counterStore";

export default function index() {
    const { count, increment, decrement } = useCounterStore();
    return (
        <DashboardLayout>
            <form>
                <input
                    type="text"
                    placeholder="Some Text..."
                    className="form-input"
                    required
                />
                <button type="submit" className="btn btn-primary mt-6">
                    Submit
                </button>
            </form>
        </DashboardLayout>
    );
}
