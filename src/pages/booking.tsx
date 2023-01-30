import { BannerBooking, FormBooking } from "@/core/components";
import { BaseContainer } from "@/core/layouts";

const BookingPage = () => {
  return (
    <>
      <BannerBooking
        title="Congreso"
        subtitle="Agenda tu reservación"
        description="Porfavor ingresa los datos necesarios para crear tu reservación"
      />
      <BaseContainer sx={{ mt: 6 }}>
        <FormBooking />
      </BaseContainer>
    </>
  );
};

export default BookingPage;
