'use client'

import { Button } from "@/components/ui/button";

const ResumePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <a href="https://docs.google.com/document/d/e/2PACX-1vQGJZwtvQTAJAOpIqFkB4-3zHl5pr6WJLIGMmfXyKg38WKGxWpEWmv0Rkpcamd9_D0JSI_lNjhRZ6RE/pub" target="_blank">
        <Button variant="getInTouchCTA" size="getInTouchCTASize">
          View Full CV
        </Button>
      </a>
    </div>
  );
};

export default ResumePage;
