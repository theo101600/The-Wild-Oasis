import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingRecentBookings } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoadingRecentStays,
  } = useRecentStays();

  if (isLoadingRecentBookings || isLoadingRecentStays) return <Spinner />;

  console.log("bookings: ", bookings);
  console.log("stays: ", stays);
  console.log("confirmedStays:", confirmedStays);

  return (
    <StyledDashboardLayout>
      <div>Statitics</div>
      <div>Today's Activity</div>
      <div>Chart stay durations</div>
      <div>Chart of sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
