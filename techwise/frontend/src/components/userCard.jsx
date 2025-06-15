import { Card, CardContent, Typography } from "@mui/material";

export default function UserCard({ user }) {
  return (
    <Card sx={{ backgroundColor: '#f5f5f5', color: '#000' }}>
      <CardContent>
        <Typography variant="h6"> {user.name} </Typography>
        <Typography variant="body1"> {user.email} </Typography>
        <Typography variant="body1"> {user.role} </Typography>
      </CardContent>
    </Card>
  );
}
