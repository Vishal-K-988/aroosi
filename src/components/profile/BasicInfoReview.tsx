import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

interface BasicInfoReviewProps {
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
  profileFor: string;
  gender: string;
}

export function BasicInfoReview({
  fullName,
  dateOfBirth,
  phoneNumber,
  profileFor,
  gender,
}: BasicInfoReviewProps) {
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          This information was collected during sign-up and cannot be changed
          here.
        </p>
      </div>

      <div>
        <Label className="text-gray-700 mb-2 block">Profile For</Label>
        <Input value={profileFor} readOnly className="bg-gray-50 capitalize" />
      </div>

      <div>
        <Label className="text-gray-700 mb-2 block">Gender</Label>
        <Input value={gender} readOnly className="bg-gray-50 capitalize" />
      </div>

      <div>
        <Label className="text-gray-700 mb-2 block">Full Name</Label>
        <Input value={fullName} readOnly className="bg-gray-50" />
      </div>

      <div>
        <Label className="text-gray-700 mb-2 block">Date of Birth</Label>
        <Input
          value={dateOfBirth ? format(new Date(dateOfBirth), "PPP") : ""}
          readOnly
          className="bg-gray-50"
        />
        {dateOfBirth && (
          <p className="text-sm text-gray-500 mt-1">
            Age: {calculateAge(dateOfBirth)} years
          </p>
        )}
      </div>

      <div>
        <Label className="text-gray-700 mb-2 block">Phone Number</Label>
        <Input value={phoneNumber} readOnly className="bg-gray-50" />
      </div>
    </div>
  );
}
