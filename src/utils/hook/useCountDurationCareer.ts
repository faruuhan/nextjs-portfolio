"use client";
import { useState } from "react";
import dayjs from "dayjs";

export function useCountDurationCareer(start: string, end: string) {
  const [month, setMonth] = useState<number>(
    end ? dayjs(end).diff(start, "month") : dayjs().diff(start, "month")
  );
  const [year, setYear] = useState<number>(0);

  while (month - 12 >= 0) {
    setMonth(month - 12);
    setYear(year + 1);
  }

  if (year === 0) {
    return `${month} Month`;
  }
  return `${year} Years ${month} Months`;
}
