"use client";

import AlumniForm from "@/components/admin-portal/alumni/AlumniForm";
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const EditPostPage = ({ params }: { params: { alumniId: string } }) => {
  return (
    <div>
      <h1
        className={
          ibmPlexSerif.className + " text-zinc-800 text-5xl font-semibold py-8"
        }
      >
        Edit Alumni
      </h1>
      <AlumniForm alumniId={params.alumniId} />
    </div>
  );
};

export default EditPostPage;
