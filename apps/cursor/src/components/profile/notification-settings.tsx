"use client";

import { updateSettingsAction } from "@/actions/update-settings";
import { Switch } from "@/components/ui/switch";
import { useOptimisticAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface NotificationSettingsProps {
  data: {
    follow_email?: boolean;
  };
}

export function NotificationSettings({ data }: NotificationSettingsProps) {
  const { execute, optimisticState } = useOptimisticAction(
    updateSettingsAction,
    {
      currentState: {
        follow_email: data.follow_email ?? true,
      },
      updateFn: (currentState, input) => ({
        follow_email: input.follow_email,
      }),
      onSuccess: () => {
        toast.success("Notification settings updated");
      },
      onError: () => {
        toast.error("Failed to update notification settings");
      },
    },
  );

  const handleFollowEmailToggle = (checked: boolean) => {
    execute({
      follow_email: checked,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h4 className="text-sm font-mono">Follow Email Notifications</h4>
          <p className="text-xs text-[#878787] font-mono">
            Receive email notifications when someone follows you
          </p>
        </div>
        <Switch
          checked={optimisticState.follow_email}
          onCheckedChange={handleFollowEmailToggle}
          aria-label="Toggle follow email notifications"
        />
      </div>
    </div>
  );
}
