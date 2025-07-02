import styles from './CardBase.module.css';

type CardBaseProps = {
    children: React.ReactNode;
    className?: string;
};

const CardBase = ({ children, className = '' }: CardBaseProps) => {
    return (
        <div className={`${styles.cardBase} ${className}`}>{children}</div>
    );
}

export default CardBase;