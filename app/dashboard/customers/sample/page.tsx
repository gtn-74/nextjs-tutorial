import CustomTypography from '@/app/ui/customers/typography'; // パスは適宜調整してください
import Link from '@mui/material/Link';
import { Ratings } from '@/app/ui/customers/Ratings'; // Ratingsコンポーネントの正確なパスに置き換えてください
import { ContainedButtons } from '@/app/ui/customers/Button';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { Button } from '@mui/material';

const Page: React.FC = () => {
  return (
    <>
      <CustomTypography
        variant="body1"
        fontSize={12}
        color="#000000    " // 色コードは`#`を含めて正確に指定
        fontFamily="Noto Sans JP"
      >
        ふりがな想定
      </CustomTypography>
      {/* 他のコンポーネント */}
      <Link href="#" color="inherit" fontWeight={'Bold'} fontSize={16}>
        参加者の名前
      </Link>
      <Ratings />
      <ContainedButtons />
      <Button />
      <LocalPrintshopIcon fontSize="large" />
    </>
  );
};

export default Page;
