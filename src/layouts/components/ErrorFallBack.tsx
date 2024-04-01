import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const ErrorFallBack = ({ error, retry }: { error: Error; retry: () => void }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Error</CardTitle>
        <CardDescription>{error.message}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button variant={"destructive"} onClick={() => retry()}>
          Retry
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ErrorFallBack;
