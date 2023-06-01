import HistoryOrderCard from "./HistoryOrderCard";

export default function HistoryOrderList({ data }) {
  return (
    <div>
      {data?.map((order) => (
        <HistoryOrderCard key={order._id} order={order} />
      ))}
    </div>
  );
}
