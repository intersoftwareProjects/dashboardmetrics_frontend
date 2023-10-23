import Image from 'next/image';

interface ImageProps {
    width?: number;
    height?: number;
    scale?: number;
    className?: string;
}

const LogoIntersoftware = ({scale = 1, width = 1, height = 1, className = ''}: ImageProps) => {
    const baseWidth = 357.24799;
    const baseHeight = 123.96213;
    return (
        <Image
            src="/intersw.svg"
            alt="Intersoftware Logo"
            width={scale * (width ?? 1) * baseWidth}
            height={scale * (height ?? 1) * baseHeight}
            className={className}
            priority
        />
    );
};

const LogoIntersoftwareWhite = ({scale = 1, width = 1, height = 1, className = ''}: ImageProps) => {
    const baseWidth = 357.24799;
    const baseHeight = 123.96213;
    return (
        <Image
            src="/intersw_white.svg"
            alt="Intersoftware Logo"
            width={scale * (width ?? 1) * baseWidth}
            height={scale * (height ?? 1) * baseHeight}
            className={className}
            priority
        />
    );
};


const LogoIntersoftwareBlack = ({scale = 1, width = 1, height = 1, className = ''}: ImageProps) => {
    const baseWidth = 357.24799;
    const baseHeight = 123.96213;
    return (
        <Image
            src="/intersw_black.svg"
            alt="Intersoftware Logo"
            width={scale * (width ?? 1) * baseWidth}
            height={scale * (height ?? 1) * baseHeight}
            className={className}
            priority
        />
    );
};

export {LogoIntersoftware, LogoIntersoftwareWhite, LogoIntersoftwareBlack};