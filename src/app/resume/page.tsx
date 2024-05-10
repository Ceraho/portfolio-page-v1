'use client'

import { Button } from "@/components/ui/button";

const ResumePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <a href="/erim_cerrahoglu_cv.pdf" target="_blank">
        <Button variant="getInTouchCTA" size="getInTouchCTASize">
          View Full CV
        </Button>
      </a>
    </div>
  );
};

export default ResumePage;
