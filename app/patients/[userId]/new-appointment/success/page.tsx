import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import * as Sentry from "@sentry/nextjs";
import { getUser } from "@/lib/actions/pationt.actions";

const Success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );

  const user = await getUser(userId);

  Sentry.metrics.set("user_view_appointment-success", user.name);

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={280}
            width={240}
            alt="success"
          />
          <h3 className="text-2xl mb-4 max-w-[600px] text-center">
            <span className="text-green-500">درخواست قرار ملاقات شما </span>
            با موفقیت ارسال شد!
          </h3>
          <p>ما بزودی درخواستتان را بررسی می کنیم.</p>
        </section>
        <section className="request-details">
          <p>جزئیات قرار ملاقات درخواست شده:</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">دکتر. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              width={24}
              height={24}
              alt="calendar"
            />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            قرار ملاقات جدید
          </Link>
        </Button>
        <p className="copyright inputLtr">© 2024 CarePlus</p>
      </div>
    </div>
  );
};

export default Success;
