-- Add two new columns to your Users table
ALTER TABLE Users
  ADD COLUMN referralCode VARCHAR(64) UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  ADD COLUMN referredBy UUID REFERENCES Users(id);

-- Create a table to track each referral event
CREATE TABLE Referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrerUserId UUID NOT NULL REFERENCES Users(id),
  referredUserId UUID NOT NULL UNIQUE REFERENCES Users(id),
  createdAt TIMESTAMPTZ NOT NULL DEFAULT now(),
  status VARCHAR(20) NOT NULL DEFAULT 'pending'
);

-- Create a table to record when rewards are paid out
CREATE TABLE ReferralRewards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referralId UUID NOT NULL REFERENCES Referrals(id),
  rewardType VARCHAR(20) NOT NULL,
  amount INTEGER NOT NULL,
  grantedAt TIMESTAMPTZ NOT NULL DEFAULT now()
);
